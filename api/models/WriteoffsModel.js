"use strict";
const TABLE_NAME = "writeoffs";
const ID = 'id';
const PRODUCT_ID = "product_id";
const PRODUCT_DESCRIPTION = "product_description";
const SELLING_PRICE = 'selling_prise';
const FIELDS = [
    ID, PRODUCT_ID, PRODUCT_DESCRIPTION, SELLING_PRICE
];

class WriteoffsModel extends require("./BaseModel") {

    static get ID() {
        return ID;
    }

    static get PRODUCT_ID() {
        return PRODUCT_ID;
    }

    static get FIELDS() {
        return FIELDS;
    }

    static get TABLE_NAME() {
        return TABLE_NAME;
    }
}

module.exports = WriteoffsModel;