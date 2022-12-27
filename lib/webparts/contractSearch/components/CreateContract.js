var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './createcontact.css';
import { useState, useEffect } from "react";
import { Web } from "sp-pnp-js";
import Modal from 'react-bootstrap/Modal';
import { Col, Form, Row, Button } from "react-bootstrap";
var CreateContract = function (prop) {
    var _a = useState(prop.prop), show = _a[0], setShow = _a[1];
    var _b = useState(false), contractTypepopup = _b[0], setcontractTypepopup = _b[1];
    var _c = useState(false), ContactDetailspopup = _c[0], setContactDetailspopup = _c[1];
    var _d = useState(""), Titlecontract = _d[0], setTitlecontract = _d[1];
    var _e = useState(""), checkContractitem = _e[0], setcheckContractitem = _e[1];
    var _f = useState(""), checkContactitem = _f[0], setcheckContactitem = _f[1];
    var _g = useState(""), ContactDetailsItem = _g[0], setContactDetailsitem = _g[1];
    var _h = useState(""), contractTypeItem = _h[0], setcontractTypeItem = _h[1];
    var _j = useState(), contractTypeId = _j[0], setcontractTypeId = _j[1];
    var _k = useState(), contactDetailsId = _k[0], setcontactDetailsId = _k[1];
    var _l = useState(""), contractTypeSuffix = _l[0], setcontractTypeSuffix = _l[1];
    var _m = useState([]), smarttaxonomy = _m[0], setSmarttaxonomy = _m[1];
    var _o = useState([]), ContactsDetails = _o[0], setContactsDetails = _o[1];
    var handleClose = function () {
        prop.callback();
        setShow(false);
    };
    var poupcloseContractType = function (item) {
        if (item == "contract") {
            setcontractTypepopup(false);
        }
        else if (item == "contact") {
            setContactDetailspopup(false);
        }
    };
    useEffect(function () {
        LoadSmartTaxonomy();
        loadContactDetails();
    }, []);
    var LoadSmartTaxonomy = function () { return __awaiter(void 0, void 0, void 0, function () {
        var web;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    web = new Web('https://hhhhteams.sharepoint.com/sites/HHHH/HR');
                    return [4 /*yield*/, web.lists.getById("63CAE346-409E-4457-B996-85A788074BCE").items.select("Id,Title,TaxType,Suffix").get()
                            .then(function (Data) {
                            console.log("smart metadata", Data);
                            var smarttaxonomyArray = [];
                            Data.map(function (item, index) {
                                if (item.TaxType != undefined && item.TaxType != null) {
                                    if (item.TaxType == 'Contract') {
                                        smarttaxonomyArray.push(item);
                                    }
                                }
                            });
                            setSmarttaxonomy(smarttaxonomyArray);
                        })
                            .catch(function (err) {
                            console.log(err.message);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var loadContactDetails = function () { return __awaiter(void 0, void 0, void 0, function () {
        var web;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    web = new Web('https://hhhhteams.sharepoint.com/sites/HHHH/HR');
                    return [4 /*yield*/, web.lists.getById('a7b80424-e5e1-47c6-80a1-0ee44a70f92c').items.select("Id,Title,ItemType,FirstName,FullName,Company,JobTitle,Item_x0020_Cover,EmployeeID/Title,StaffID,EmployeeID/Id").expand("EmployeeID").orderBy("Created", true).get()
                            .then(function (Data) {
                            console.log(Data);
                            var employecopyData = [];
                            Data.map(function (item, index) {
                                if (item.ItemType != undefined && item.ItemType != "") {
                                    if (item.ItemType == "Contact") {
                                        employecopyData.push(item);
                                    }
                                }
                            });
                            setContactsDetails(employecopyData);
                        })
                            .catch(function (err) {
                            console.log(err.message);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var openContractTypepopup = function (item) {
        setcontractTypepopup(true);
    };
    var openEmployeeDetailspopup = function () {
        setContactDetailspopup(true);
    };
    var saveContractType = function (checkitem, type) {
        if (checkitem != undefined && checkitem != "" && type === "contract") {
            smarttaxonomy.map(function (items, index) {
                if (items.Title === checkitem) {
                    setcontractTypeId(items.Id);
                    setcontractTypeSuffix(items.Suffix);
                }
            });
            setcontractTypeItem(checkitem);
            poupcloseContractType("contract");
        }
        else if (checkitem != undefined && checkitem != "" && type === "contact") {
            ContactsDetails.map(function (items, index) {
                if (items.FullName === checkitem) {
                    setcontactDetailsId(items.Id);
                }
            });
            setContactDetailsitem(checkitem);
            poupcloseContractType("contact");
        }
    };
    console.log("contractType Id:", contractTypeId);
    console.log("contract type suffix", contractTypeSuffix);
    console.log("employename hhhhstaff Id:", contactDetailsId);
    var createnewcontract = function () { return __awaiter(void 0, void 0, void 0, function () {
        var contractNumber, contractId, web, web;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("contractType Id:", contractTypeId);
                    console.log("contractType Id:", contractTypeItem);
                    if (!(contractTypeItem != undefined && contractTypeItem != "")) return [3 /*break*/, 2];
                    web = new Web('https://hhhhteams.sharepoint.com/sites/HHHH/HR');
                    return [4 /*yield*/, web.lists.getById('986680CE-5D69-47B4-947C-3998DDC3776C').items.select("Id,contractNumber,Title,ContractId,typeOfContract").filter("typeOfContract eq'" + contractTypeItem + "'").orderBy("Created", false).top(1).get()
                            .then(function (Data) {
                            var contractNumberlength;
                            console.log("contract list data ", Data);
                            if (Data != undefined && Data.length > 0) {
                                contractNumber = Data[0].contractNumber + 1;
                                console.log(contractTypeSuffix + "-" + contractNumber);
                                var Contractlength = contractNumber.toString();
                                contractNumberlength = Contractlength.length;
                                console.log("length of contract number ", contractNumberlength);
                                // setContractNumber(contractNumber) ;
                            }
                            if (Data == undefined || Data.length == 0) {
                                contractNumber = 1;
                                var Contractlength = contractNumber.toString();
                                contractNumberlength = Contractlength.length;
                                // setContractNumber(contractNumber);
                            }
                            if (contractNumberlength == 0 && contractNumberlength == "") {
                                contractId = contractTypeSuffix + "-" + "0000" + contractNumber;
                                // setcontractId(contractId);
                            }
                            else if (contractNumberlength == 1 && contractNumberlength > 0 && contractNumberlength != "" && contractNumberlength != undefined) {
                                contractId = contractTypeSuffix + "-" + "0000" + contractNumber;
                                // setcontractId(contractId);
                            }
                            else if (contractNumberlength == 2 && contractNumberlength > 0 && contractNumberlength != "" && contractNumberlength != undefined) {
                                contractId = contractTypeSuffix + "-" + "000" + contractNumber;
                                // setcontractId(contractId);
                            }
                            else if (contractNumberlength == 3 && contractNumberlength > 0 && contractNumberlength != "" && contractNumberlength != undefined) {
                                contractId = contractTypeSuffix + "-" + "00" + contractNumber;
                                // setcontractId(contractId);
                            }
                            else if (contractNumberlength == 4 && contractNumberlength > 0 && contractNumberlength != "" && contractNumberlength != undefined) {
                                contractId = contractTypeSuffix + "-" + "0" + contractNumber;
                                // setcontractId(contractId);
                            }
                        })
                            .catch(function (err) {
                            console.log(err.message);
                        })];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    console.log(contractNumber);
                    console.log(contractId);
                    console.log(contactDetailsId);
                    if (!(Titlecontract != "" && Titlecontract != undefined && ContactDetailsItem != undefined && ContactDetailsItem != "" && contractTypeItem != "" && contractTypeItem != undefined)) return [3 /*break*/, 4];
                    web = new Web("https://hhhhteams.sharepoint.com/sites/HHHH/HR");
                    return [4 /*yield*/, web.lists.getById("986680CE-5D69-47B4-947C-3998DDC3776C").items.add({
                            Title: Titlecontract,
                            //  Type_OfContractID:contractTypeId,
                            typeOfContract: contractTypeItem,
                            HHHHStaffId: contactDetailsId,
                            contractNumber: contractNumber,
                            ContractId: contractId
                        })
                            .then(function (res) {
                            console.log(res);
                            handleClose();
                        })
                            .catch(function (err) {
                            console.log(err.message);
                        })];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    alert("please Fill All the input field");
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "modal show", style: { display: 'block', position: 'initial' } },
        React.createElement(Modal, { show: show, onHide: handleClose, size: "lg", "aria-labelledby": "contained-modal-title-vcenter" },
            React.createElement(Modal.Header, null,
                React.createElement(Modal.Title, null, "Create Contract"),
                React.createElement("span", { onClick: handleClose }, "x")),
            React.createElement(Modal.Body, null,
                React.createElement(Form, null,
                    React.createElement(Row, { className: "mb-3" },
                        React.createElement(Form.Group, { as: Col, controlId: "formGridCity" },
                            React.createElement(Form.Label, null, "Title"),
                            React.createElement("input", { type: "text", className: "form-control", "aria-label": "Small", "aria-describedby": "inputGroup-sizing-sm", onChange: function (e) { return setTitlecontract(e.target.value); } })),
                        React.createElement(Form.Group, { as: Col, controlId: "formGridCity" },
                            React.createElement(Form.Label, null, "Employee Name"),
                            React.createElement("div", null,
                                " ",
                                React.createElement("input", { type: "text", className: "form-control", "aria-label": "Small", "aria-describedby": "inputGroup-sizing-sm", value: ContactDetailsItem }),
                                React.createElement("span", { className: "toltrippopup" },
                                    React.createElement("img", { onClick: openEmployeeDetailspopup, src: "https://hhhhteams.sharepoint.com/sites/HHHH/SiteCollectionImages/ICONS/Foundation/EMMCopyTerm.png", "data-themekey": "#" })))),
                        React.createElement(Form.Group, { as: Col, controlId: "formGridCity" },
                            React.createElement(Form.Label, null, "Contract Type"),
                            React.createElement("div", null,
                                React.createElement("input", { type: "text", className: "form-control", "aria-label": "Small", "aria-describedby": "inputGroup-sizing-sm", value: contractTypeItem }),
                                React.createElement("span", { className: "toltrippopup-2" },
                                    React.createElement("img", { onClick: function () { return openContractTypepopup(contractTypeItem); }, src: "https://hhhhteams.sharepoint.com/sites/HHHH/SiteCollectionImages/ICONS/Foundation/EMMCopyTerm.png", "data-themekey": "#" }))))))),
            React.createElement(Modal.Footer, null,
                React.createElement(Button, { variant: "primary", onClick: handleClose }, "Add New Employee"),
                React.createElement(Button, { variant: "primary", onClick: createnewcontract }, "Create"),
                React.createElement(Button, { variant: "secondary", onClick: handleClose }, "Close"))),
        React.createElement(Modal, { show: contractTypepopup, onHide: function () { return poupcloseContractType("contract"); }, size: "lg", "aria-labelledby": "contained-modal-title-vcenter" },
            React.createElement(Modal.Header, { closeButton: true },
                React.createElement(Modal.Title, null, "Contract Type")),
            React.createElement(Modal.Body, null,
                React.createElement("div", { className: 'bodypoup col-sm-12 row' }, smarttaxonomy.map(function (item, index) {
                    return (React.createElement("div", { className: "radio col-sm-4" },
                        React.createElement("div", { key: index },
                            " ",
                            React.createElement("input", { type: "radio", id: "html", name: "fav_language", defaultChecked: checkContractitem == item.Title, value: item.Title, onChange: function (e) { return setcheckContractitem(e.target.value); } }),
                            React.createElement("label", null, item.Title))));
                }))),
            React.createElement(Modal.Footer, null,
                React.createElement(Button, { variant: "primary", onClick: function () { return saveContractType(checkContractitem, "contract"); } }, "save"),
                React.createElement(Button, { variant: "secondary", onClick: function () { return poupcloseContractType("contract"); } }, "Cancel"))),
        React.createElement(Modal, { show: ContactDetailspopup, onHide: function () { return poupcloseContractType("contact"); }, size: "lg", "aria-labelledby": "contained-modal-title-vcenter" },
            React.createElement(Modal.Header, { closeButton: true },
                React.createElement(Modal.Title, null, "Contacts")),
            React.createElement(Modal.Body, null,
                React.createElement("div", { className: 'bodypoup col-sm-12 row' }, ContactsDetails.map(function (item, index) {
                    return (React.createElement("div", { className: "radio col-sm-4" },
                        React.createElement("div", { key: index },
                            " ",
                            React.createElement("input", { type: "radio", id: "html", name: "fav_language", defaultChecked: checkContactitem == item.FullName, value: item.FullName, onChange: function (e) { return setcheckContactitem(e.target.value); } }),
                            React.createElement("label", null, item.FullName))));
                }))),
            React.createElement(Modal.Footer, null,
                React.createElement(Button, { variant: "primary", onClick: function () { return saveContractType(checkContactitem, "contact"); } }, "save"),
                React.createElement(Button, { variant: "secondary", onClick: function () { return poupcloseContractType("contact"); } }, "Cancel")))));
};
CreateContract.defaultProps = {
    prop: false,
};
export default CreateContract;
//# sourceMappingURL=CreateContract.js.map