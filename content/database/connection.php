<?php

use Illuminate\Database\Capsule\Manager as Capsule;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(dirname(__DIR__, 2));
$dotenv->load();

$capsule = new Capsule;
$capsule->addConnection([
    'driver' => 'mysql',
    'host' => $_ENV['CONTENT_DB_HOST'],
    'database' => $_ENV['CONTENT_DB_DATABASE'],
    'username' => $_ENV['CONTENT_DB_USERNAME'],
    'password' => $_ENV['CONTENT_DB_PASSWORD'],
    'charset' => 'utf8mb4',
    'collation' => 'utf8mb4_unicode_ci',
    'prefix' => '',
]);
$capsule->setAsGlobal();
$capsule->bootEloquent();

try {
    $capsule->getConnection()->getPdo();
} catch (Exception $e) {
    http_response_code(500);
    exit("Er kon geen verbinding gemaakt worden met de database.");
}