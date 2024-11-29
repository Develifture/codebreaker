var objc = JSON.parse($response.body);

objc = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "app_item_id": 952050883,
    "receipt_creation_date": "2024-10-25 09:29:41 Etc\/GMT",
    "bundle_id": "in.muditbhargava.LookUp", // Updated Bundle ID
    "original_purchase_date": "2024-10-25 09:10:57 Etc\/GMT",
    "in_app": [
      {
        "quantity": "1",
        "purchase_date_ms": "1729848534000",
        "expires_date": "2024-10-28 09:28:54 Etc\/GMT",
        "expires_date_pst": "2024-10-28 02:28:54 America\/Los_Angeles",
        "is_in_intro_offer_period": "true",
        "transaction_id": "220002257592586",
        "is_trial_period": "true",
        "original_transaction_id": "220002257592586",
        "purchase_date": "2024-10-25 09:28:54 Etc\/GMT",
        "product_id": "com.squircle.lookup.plus.lifetime", // Updated Product ID
        "original_purchase_date_pst": "2024-10-25 02:28:56 America\/Los_Angeles",
        "in_app_ownership_type": "PURCHASED",
        "original_purchase_date_ms": "1729848536000",
        "web_order_line_item_id": "220001028121943",
        "expires_date_ms": "1730107734000",
        "purchase_date_pst": "2024-10-25 02:28:54 America\/Los_Angeles",
        "original_purchase_date": "2024-10-25 09:28:56 Etc\/GMT"
      }
    ],
    "adam_id": 952050883,
    "receipt_creation_date_pst": "2024-10-25 02:29:41 America\/Los_Angeles",
    "request_date": "2024-10-25 09:29:43 Etc\/GMT",
    "request_date_pst": "2024-10-25 02:29:43 America\/Los_Angeles",
    "version_external_identifier": 869855565,
    "request_date_ms": "1729848583114",
    "original_purchase_date_pst": "2024-10-25 02:10:57 America\/Los_Angeles",
    "application_version": "4",
    "original_purchase_date_ms": "1729847457000",
    "receipt_creation_date_ms": "1729848581000",
    "original_application_version": "4",
    "download_id": 503932966556570299
  },
  "pending_renewal_info": [
    {
      "product_id": "com.squircle.lookup.plus.lifetime", // Updated Product ID
      "original_transaction_id": "220002257592586",
      "auto_renew_product_id": "com.vimosoft.vllo.premium3.annually_subscription",
      "auto_renew_status": "1"
    }
  ],
  "status": 0,
  "latest_receipt_info": [
    {
      "quantity": "1",
      "purchase_date_ms": "1729848534000",
      "expires_date": "2024-10-28 09:28:54 Etc\/GMT",
      "expires_date_pst": "2024-10-28 02:28:54 America\/Los_Angeles",
      "is_in_intro_offer_period": "true",
      "transaction_id": "220002257592586",
      "is_trial_period": "true",
      "original_transaction_id": "220002257592586",
      "purchase_date": "2024-10-25 09:28:54 Etc\/GMT",
      "product_id": "com.squircle.lookup.plus.lifetime", // Updated Product ID
      "original_purchase_date_pst": "2024-10-25 02:28:56 America\/Los_Angeles",
      "in_app_ownership_type": "PURCHASED",
      "subscription_group_identifier": "20877865",
      "original_purchase_date_ms": "1729848536000",
      "web_order_line_item_id": "220001028121943",
      "expires_date_ms": "1730107734000",
      "purchase_date_pst": "2024-10-25 02:28:54 America\/Los_Angeles",
      "original_purchase_date": "2024-10-25 09:28:56 Etc\/GMT"
    }
  ],
  "latest_receipt": "Matt"
};

$done({body : JSON.stringify(objc)});