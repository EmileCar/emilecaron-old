<?php

use \Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    public static function is_authenticated(): Account {
        if (empty($_SESSION["account_ksaoosterzele"])) {
            ErrorResponse::exitWithError(204, "Er is geen sessie actief.");
        }

        $accountId = $_SESSION["account_ksaoosterzele"];
        $account = Account::find($accountId);

        if (empty($account)) {
            ErrorResponse::exitWithError(404, "Account niet gevonden. Log uit en probeer opnieuw in te loggen.");
        }

        return $account;
    }
}