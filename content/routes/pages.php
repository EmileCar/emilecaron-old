<?php
$pagesRoutes = [
    'pages' => array(
        'controller' => 'File',
        'methods' => array(
            'GET' => 'get_pages',
        )
    ),
    'page' => array(
        'controller' => 'File',
        'methods' => array(
            'GET' => 'get_page',
            'POST' => 'create_page',
        )
    ),
];