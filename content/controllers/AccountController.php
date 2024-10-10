<?php

require_once __DIR__ . '/Controller.php';
require_once __DIR__ . '/../models/Account.php';
require_once __DIR__ . '/../responses/ErrorResponse.php';

class AccountController extends Controller {

	// public function validate_credentials() {
	// 	$requestData = json_decode(file_get_contents('php://input'), true);

	// 	if (empty($requestData["username"]) || empty($requestData["password"])) {
	// 		ErrorResponse::exitWithError(400, "Username and password are required.");
	// 	}

	// 	$account = Account::where('username', $requestData["username"])->where('password', $requestData["password"])->first();

	// 	if (empty($account)) {
	// 		ErrorResponse::exitWithError(401, "De inloggegevens zijn onjuist.");
	// 	}

	// 	$_SESSION["account_ksaoosterzele"] = $account->id;
	// 	exit();
	// }

	public function get_account() {
		$account = Account::is_authenticated();
		unset($account->password);
		unset($account->created_at);
		unset($account->updated_at);
		unset($account->id);

		exit(json_encode($account->toArray()));
	}

	public function login() {
		$requestData = json_decode(file_get_contents('php://input'), true);

		if (empty($requestData["username"]) || empty($requestData["password"])) {
			ErrorResponse::exitWithError(400, "Username and password are required.");
		}

		$account = Account::where('username', $requestData["username"])->where('password', $requestData["password"])->first();

		if (empty($account)) {
			ErrorResponse::exitWithError(401, "Invalid credentials.");
		}

		$_SESSION["account_caroneCMS"] = $account->id;
		exit();
	}

	public function signout() {
		if(!empty($_SESSION["account_caroneCMS"])){
			unset($_SESSION["account_caroneCMS"]);
			exit(json_encode("Session removed"));
		}
	}
}

