<?php

require_once __DIR__ . '/Controller.php';

class FileController extends Controller {

    private $pagesDir = __DIR__ . '/../output/pages/';
    private $componentsDir = __DIR__ . '/../output/components/';

    public function get_pages() {
        $pages = self::get_files($this->pagesDir);
        exit(json_encode($pages));
    }

    public function get_page() {
        if (!isset($_GET['name'])) {
            ErrorResponse::exitWithError(400, "Page name is required.");
        }

        $pageName = $_GET['name'];
        $page = self::get_file($this->pagesDir, $pageName);
        exit(json_encode($page));
    }

    public function get_components() {
        $components = self::get_files($this->componentsDir);
        exit(json_encode($components));
    }

    public function get_component() {
        if (!isset($_GET['name'])) {
            ErrorResponse::exitWithError(400, "Component name is required.");
        }

        $componentName = $_GET['name'];
        $component = self::get_file($this->componentsDir, $componentName);
        exit(json_encode($component));
    }

    public function create_component() {
        if (!isset($_GET['name'])) {
            ErrorResponse::exitWithError(400, "Component name is required.");
        }

        $name = $_GET['name'];

        $response = self::create_file($this->componentsDir, $name, null);
        exit(json_encode($response));
    }

    public function create_page() {
        if (!isset($_GET['name'])) {
            ErrorResponse::exitWithError(400, "Page name is required.");
        }

        $name = $_GET['name'];

        $response = self::create_file($this->pagesDir, $name, null);
        exit(json_encode($response));
    }

    private static function get_files($dir) {
        $_files = scandir($dir);
        $files = [];

        foreach ($_files as $file) {

            if (pathinfo($file, PATHINFO_EXTENSION) === 'json') {
                $filePath = $dir . '/' . $file;

                $fileName = pathinfo($file, PATHINFO_FILENAME);

                $lastModified = date("Y-m-d H:i:s", filemtime($filePath));

                $files[] = [
                    'name' => ucfirst(str_replace('_', ' ', $fileName)),
                    'fileName' => $fileName . ".json",
                    'lastModified' => $lastModified
                ];
            }
        }

        return $files;
    }

    private static function get_file($dir, $fileName) {
        $filePath = $dir . $fileName . '.json';

        if (file_exists($filePath)) {
            $fileContent = file_get_contents($filePath);

            if (!is_string($fileContent)) {
                ErrorResponse::exitWithError(500, "An error occurred while fetching the file. String expected.");
            }

            $fileData = json_decode($fileContent, true);

            $response = [
                'name' => ucfirst(str_replace('_', ' ', $fileName)),
                'content' => $fileData
            ];

            return $response;
        } else {
            ErrorResponse::exitWithError(404, "File not found.");
        }
    }

    private static function create_file($dir, $name, $content) {
        $filePath = $dir . $name . '.json';

        if (file_exists($filePath)) {
            ErrorResponse::exitWithError(400, "File already exists.");
        }

        $file = fopen($filePath, "w");

        if ($content === null) {
            $content = [];
        }

        fwrite($file, json_encode($content));
        fclose($file);

        return [
            'message' => 'File created successfully.'
        ];
    }
}

