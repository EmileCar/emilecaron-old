<?php
$accountRoutes = [
    'account' => array(
        'controller' => 'Account',
        'methods' => array(
            'GET' => 'get_account',
        )
    ),
    'login' => array(
        'controller' => 'Account',
        'methods' => array(
            'POST' => 'login',
        )
    ),
    'signout' => array(
        'controller' => 'Account',
        'methods' => array(
            'POST' => 'signout',
        )
    ),
];