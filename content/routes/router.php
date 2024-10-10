<?php
require_once 'pages.php';
require_once 'account.php';

// Als er geen pagina is opgegeven, zet de page op index
if(empty($_GET['action'])) {
    $_GET['action'] = 'index';
}

$allowedRoutes = array_merge($pagesRoutes, $accountRoutes);

require_once __DIR__ . '/../responses/ErrorResponse.php';

// Als de route niet bestaat, geef een 404
if (empty($allowedRoutes[$_GET['action']])) {
    ErrorResponse::exitWithError(404, 'Deze pagina bestaat niet');
}

// Als de methode niet toegevoegd is aan de route, geef een 405
$route = $allowedRoutes[$_GET['action']];
$requestMethod = $_SERVER['REQUEST_METHOD'];
if (isset($route['methods'][$requestMethod])) {
    $actionMethod = $route['methods'][$requestMethod];
} else {
    ErrorResponse::exitWithError(405, 'Deze methode is niet toegestaan');
}