<?php

use \Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    public static function is_authenticated(): Account {
        if (empty($_SESSION["account_caroneCMS"])) {
            ErrorResponse::exitWithError(204, "There is no active session. Please log in.");
        }

        $accountId = $_SESSION["account_caroneCMS"];
        $account = Account::find($accountId);

        if (empty($account)) {
            ErrorResponse::exitWithError(404, "Account not found. Please log in again.");
        }

        return $account;
    }
}