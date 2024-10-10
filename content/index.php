<?php
/*
 * 
*/

// Disable error reporting
ini_set('display_errors', false);
error_reporting(1);

set_error_handler(function($errno, $errstr, $errfile, $errline) {
    throw new ErrorException($errstr, 0, $errno, $errfile, $errline);
});

$allowedOrigins = [
    'https://emilecaron.be',
    'http://localhost:3001',
];

if(!empty($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins))
{
    $http_origin = $_SERVER['HTTP_ORIGIN'];
} else {
    $http_origin = "";
}

header("Access-Control-Allow-Origin: " . $http_origin);
header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');
header('Access-Control-Max-Age: 86400');
header('Access-Control-Allow-Credentials: true');
http_response_code(200);

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
	return;
}

// SESSIONS
session_set_cookie_params([
    'samesite' => 'None',
    'secure' => true,
]);
session_start();

// GET ROUTE AND CONTROLLER
require_once "../vendor/autoload.php";
require_once "./database/connection.php";
require_once "./routes/router.php";

$controllerName = $route['controller'] . 'Controller';

require_once __DIR__ . '/controllers/' . $controllerName . ".php";

$controllerObj = new $controllerName();
$controllerObj->route = $route;

require_once __DIR__ . '/responses/ErrorResponse.php';

try {
    $controllerObj->filter();
} catch (Throwable $e) {
    ErrorResponse::exitWithError(500, "Er is iets misgelopen, probeer het later opnieuw. Fout in een endpoint.", ["error" => $e->getMessage()]);
}

// If the controller has not returned a response, return a 500 error
ErrorResponse::exitWithError(500, "Er is iets misgelopen, probeer het later opnieuw. Fout in de applicatie.");
restore_error_handler();