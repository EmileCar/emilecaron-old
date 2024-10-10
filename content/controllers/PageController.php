<?php

require_once __DIR__ . '/Controller.php';

class PageController extends Controller {

    private $pagesDir = __DIR__ . '/../pages/';

    public function get_pages() {
        try {
            $files = scandir($this->pagesDir);
            $pages = [];

            foreach ($files as $file) {
                if (pathinfo($file, PATHINFO_EXTENSION) === 'json') {
                    $pages[] = pathinfo($file, PATHINFO_FILENAME);
                }
            }

			exit(json_encode($pages));
        } catch (Exception $e) {
            ErrorResponse::exitWithError(status_code: 500, error_message: "An error occurred while fetching the pages.");
        }
    }

    public function get_page() {
        if (!isset($_GET['page'])) {
            ErrorResponse::exitWithError(400, "Page name is required.");
        }

        $pageName = $_GET['page'];

        try {
            $filePath = $this->pagesDir . $pageName . '.json';

            if (file_exists($filePath)) {
                $pageContent = file_get_contents($filePath);
                exit(json_decode($pageContent, true));
            } else {
                ErrorResponse::exitWithError(404, "Page not found.");
            }
        } catch (Exception $e) {
            ErrorResponse::exitWithError(500, "An error occurred while fetching the page.");
        }
    }

    public function create_page() {
        $requestData = json_decode(file_get_contents('php://input'), true);

        if (empty($requestData['name']) || empty($requestData['content'])) {
            ErrorResponse::exitWithError(400, "Name and content are required.");
        }

        try {
            $filePath = $this->pagesDir . $requestData->name . '.json';

            if (file_exists($filePath)) {
                ErrorResponse::exitWithError(409, "Page already exists.");
            }

            $jsonData = json_encode($requestData->content, JSON_PRETTY_PRINT);
            file_put_contents($filePath, $jsonData);

            exit(json_encode("Page created."));
        } catch (Exception $e) {
            ErrorResponse::exitWithError(500, "An error occurred while creating the page.");
        }
    }

    public function update_page() {
        $requestData = json_decode(file_get_contents('php://input'), true);

        if (empty($requestData['name']) || empty($requestData['content'])) {
            ErrorResponse::exitWithError(400, "Name and content are required.");
        }

        try {
            $filePath = $this->pagesDir . $requestData->name . '.json';

            if (!file_exists($filePath)) {
                ErrorResponse::exitWithError(404, "Page not found.");
            }

            $jsonData = json_encode($requestData->content, JSON_PRETTY_PRINT);
            file_put_contents($filePath, $jsonData);

            exit(json_encode("Page updated."));
        } catch (Exception $e) {
            ErrorResponse::exitWithError(500, "An error occurred while updating the page.");
        }
    }
}

