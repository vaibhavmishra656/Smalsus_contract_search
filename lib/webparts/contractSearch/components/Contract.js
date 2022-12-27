var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import "./ContractSearch.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useCallback, useEffect } from "react";
import { Web } from "sp-pnp-js";
import './CreateContract.css';
import * as moment from 'moment';
import CreateContract from './CreateContract';
import ReactToPrint from "react-to-print";
var ContractData = function () {
    var componentLongRef = React.useRef();
    var _a = useState([]), AllContacts = _a[0], setAllContacts = _a[1];
    var _b = useState([]), AllContactsData = _b[0], setAllContactsData = _b[1];
    var _c = useState(0), FilterLength = _c[0], setFilterLength = _c[1];
    var _d = useState(0), AllContactsLength = _d[0], setAllContactsLength = _d[1];
    var _e = useState(false), openCreateContract = _e[0], setopenCreateContract = _e[1];
    var _f = useState({ searchAll: "", contractId: "", searchTitle: "", Employee: "", ContractType: "", StartDate: "", EndDate: "", contractStatus: "", ContractSigned: "", ContractChanged: "" }), filterkey = _f[0], setFilterkey = _f[1];
    useEffect(function () {
        loadEmployeesDetails();
    }, []);
    var loadEmployeesDetails = function () { return __awaiter(void 0, void 0, void 0, function () {
        var date, currentdate, web;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    date = new Date();
                    currentdate = moment(date).format("DD/MM/YYYY");
                    web = new Web('https://hhhhteams.sharepoint.com/sites/HHHH/HR');
                    return [4 /*yield*/, web.lists.getById('986680CE-5D69-47B4-947C-3998DDC3776C').items
                            .select("Id,Title,ContractChanged,ContractId,ContractSigned,endDate,PersonnelNumber,contractNumber,typeOfContract,HolidayEntitlement,WorkingHours,GrossSalary,HHHHStaff/Title,HHHHStaff/FullName,HHHHStaff/Id,startDate,Attachments,Title,Created,Modified,typeOfContract,Editor/Name,Editor/Title,EmployeeID/Id,EmployeeID/Title,EmployeeID/Name,Author/Id,Author/Title,Author/Name,HHHHContactId").expand("Editor,Author,HHHHStaff,EmployeeID").top(4999).orderBy("Created", false)
                            .get().then(function (Data) {
                            Data.map(function (item, index) {
                                // item["HHHHStaffTitle"]=item.HHHHStaff.Title;
                                // console.log(item);
                                if (item.HHHHStaff != undefined || item.HHHHStaff != "") {
                                    try {
                                        item.HHHHStaffTitle = item.HHHHStaff.FullName != undefined ? item.HHHHStaff.FullName : '';
                                    }
                                    catch (error) {
                                        console.log(error);
                                    }
                                }
                                ;
                                if (item.startDate != null || item.startDate != undefined) {
                                    item.StartDate = moment(item.startDate).format("DD/MM/YYYY");
                                }
                                ;
                                if (item.endDate != null || item.endDate != undefined) {
                                    item.EndDate = moment(item.endDate).format("DD/MM/YYYY");
                                }
                                ;
                                if (item.StartDate != undefined && item.StartDate != null || item.EndDate != undefined && item.EndDate != null || item.EndDate == undefined && item.EndDate == null) {
                                    if (item.StartDate < item.EndDate && item.EndDate > currentdate) {
                                        item.contractStatus = "Active";
                                    }
                                    else if (item.EndDate == undefined && item.EndDate == null) {
                                        item.contractStatus = "";
                                    }
                                    else {
                                        item.contractStatus = " non active";
                                    }
                                }
                                ;
                                setAllContactsLength(Data.length);
                                setFilterLength(Data.length);
                            });
                            setAllContactsData(Data);
                            setAllContacts(Data);
                            console.log(AllContacts);
                            console.log(Data[0].HHHHStaff.Title);
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
    var filterData = function (e, item) {
        var key = e.target.value.toLowerCase();
        if (item == "searchAll" && key.length != 0) {
            setFilterkey(__assign(__assign({}, filterkey), { searchAll: key }));
            var filterAll = AllContacts.filter(function (items) { var _a; return (_a = items.Title) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(key); });
            setFilterLength(filterAll.length);
            setAllContacts(filterAll);
        }
        else if (key.length == 0 && item == "searchAll") {
            setAllContacts(AllContactsData);
            setFilterLength(AllContactsLength);
            setFilterkey(__assign(__assign({}, filterkey), { searchAll: "" }));
        }
        else if (item == "contractId" && key.length != 0) {
            setFilterkey(__assign(__assign({}, filterkey), { contractId: key }));
            var filtercontractId = AllContacts.filter(function (items) { var _a; return (_a = items.ContractId) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(key); });
            setFilterLength(filtercontractId.length);
            setAllContacts(filtercontractId);
        }
        else if (key.length == 0 && item == "contractId") {
            setAllContacts(AllContactsData);
            setFilterLength(AllContactsLength);
            setFilterkey(__assign(__assign({}, filterkey), { contractId: "" }));
        }
        else if (item == "searchTitle" && key.length != 0) {
            setFilterkey(__assign(__assign({}, filterkey), { searchTitle: key }));
            var filterAll = AllContacts.filter(function (items) { var _a; return (_a = items.Title) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(key); });
            setFilterLength(filterAll.length);
            setAllContacts(filterAll);
        }
        else if (key.length == 0 && item == "searchTitle") {
            setAllContacts(AllContactsData);
            setFilterLength(AllContactsLength);
            setFilterkey(__assign(__assign({}, filterkey), { searchTitle: "" }));
        }
        else if (item == "Employee" && key.length != 0) {
            setFilterkey(__assign(__assign({}, filterkey), { Employee: key }));
            var filterEmployee = AllContacts.filter(function (items) { var _a; return (_a = items.HHHHStaffTitle) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(key); });
            setFilterLength(filterEmployee.length);
            setAllContacts(filterEmployee);
        }
        else if (key.length == 0 && item == "Employee") {
            setAllContacts(AllContactsData);
            setFilterLength(AllContactsLength);
            setFilterkey(__assign(__assign({}, filterkey), { Employee: "" }));
        }
        else if (item == "ContractType" && key.length != 0) {
            setFilterkey(__assign(__assign({}, filterkey), { ContractType: key }));
            var filtercontractType = AllContacts.filter(function (items) { var _a; return (_a = items.typeOfContract) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(key); });
            setFilterLength(filtercontractType.length);
            setAllContacts(filtercontractType);
        }
        else if (key.length == 0 && item == "ContractType") {
            setAllContacts(AllContactsData);
            setFilterLength(AllContactsLength);
            setFilterkey(__assign(__assign({}, filterkey), { ContractType: "" }));
        }
        else if (item == "StartDate" && key.length != 0) {
            setFilterkey(__assign(__assign({}, filterkey), { StartDate: key }));
            var filterStartDate = AllContacts.filter(function (items) { var _a; return (_a = items.StartDate) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(key); });
            setFilterLength(filterStartDate.length);
            setAllContacts(filterStartDate);
        }
        else if (key.length == 0 && item == "StartDate") {
            setAllContacts(AllContactsData);
            setFilterLength(AllContactsLength);
            setFilterkey(__assign(__assign({}, filterkey), { StartDate: "" }));
        }
        else if (item == "EndDate" && key.length != 0) {
            setFilterkey(__assign(__assign({}, filterkey), { EndDate: key }));
            var filterEndDate = AllContacts.filter(function (items) { var _a; return (_a = items.EndDate) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(key); });
            setFilterLength(filterEndDate.length);
            setAllContacts(filterEndDate);
        }
        else if (key.length == 0 && item == "EndDate") {
            setAllContacts(AllContactsData);
            setFilterLength(AllContactsLength);
            setFilterkey(__assign(__assign({}, filterkey), { EndDate: "" }));
        }
        else if (item == "contractStatus" && key.length != 0) {
            setFilterkey(__assign(__assign({}, filterkey), { contractStatus: key }));
            var filtercontractStatus = AllContacts.filter(function (items) { var _a; return (_a = items.contractStatus) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(key); });
            setFilterLength(filtercontractStatus.length);
            setAllContacts(filtercontractStatus);
        }
        else if (key.length == 0 && item == "contractStatus") {
            setAllContacts(AllContactsData);
            setFilterLength(AllContactsLength);
            setFilterkey(__assign(__assign({}, filterkey), { contractStatus: "" }));
        }
        else if (item == "ContractSigned" && key.length != 0) {
            setFilterkey(__assign(__assign({}, filterkey), { ContractSigned: key }));
            var filterContractSigned = AllContacts.filter(function (items) { var _a; return (_a = items.ContractSigned) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(key); });
            setFilterLength(filterContractSigned.length);
            setAllContacts(filterContractSigned);
        }
        else if (key.length == 0 && item == "ContractSigned") {
            setAllContacts(AllContactsData);
            setFilterLength(AllContactsLength);
            setFilterkey(__assign(__assign({}, filterkey), { ContractSigned: "" }));
        }
        else if (item == "ContractChanged" && key.length != 0) {
            setFilterkey(__assign(__assign({}, filterkey), { ContractChanged: key }));
            var filterContractChanged = AllContacts.filter(function (items) { var _a; return (_a = items.ContractChanged) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(key); });
            setFilterLength(filterContractChanged.length);
            setAllContacts(filterContractChanged);
        }
        else if (key.length == 0 && item == "ContractChanged") {
            setAllContacts(AllContactsData);
            setFilterLength(AllContactsLength);
            setFilterkey(__assign(__assign({}, filterkey), { ContractChanged: "" }));
        }
    };
    var openPopup = function () {
        setopenCreateContract(true);
    };
    var Callback = useCallback(function () {
        loadEmployeesDetails();
        setopenCreateContract(false);
    }, [openCreateContract]);
    var clearAll = function () {
        setFilterkey(__assign(__assign({}, filterkey), { searchAll: "", contractId: "", searchTitle: "", Employee: "", ContractType: "", StartDate: "", EndDate: "", contractStatus: "", ContractSigned: "", ContractChanged: "" }));
        // loadEmployeesDetails();
        setAllContacts(AllContactsData);
        console.log(filterkey);
    };
    return (React.createElement("div", { className: 'contact-section' },
        React.createElement("div", { className: 'cotact-container' },
            React.createElement("h2", null, "Contracts-Search"),
            React.createElement("div", null,
                React.createElement("div", { className: "card-header d-flex justify-content-between" },
                    React.createElement("div", null,
                        React.createElement("span", { className: 'mx-2' },
                            "Showing ",
                            React.createElement("b", null,
                                FilterLength,
                                " "),
                            " of ",
                            React.createElement("b", null,
                                AllContactsLength,
                                " "),
                            "Contacts"),
                        React.createElement("input", { type: 'text', className: "main-search", value: filterkey.searchAll, placeholder: " Search All", onChange: function (e) { return filterData(e, "searchAll"); } }),
                        React.createElement("button", { className: 'search-button' }, "search")),
                    React.createElement("div", { className: 'table-buttons' },
                        React.createElement("button", { className: "function-btns ", onClick: openPopup }, "Create Contract"),
                        "\u00A0\u00A0",
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", onClick: clearAll, viewBox: "0 0 20 20" },
                            React.createElement("path", { d: "M2.763 13.563c-1.515 1.488-.235 3.016-2.247 5.279-.908 1.023 3.738.711 6.039-1.551.977-.961.701-2.359-.346-3.389-1.047-1.028-2.47-1.3-3.446-.339zM19.539.659C18.763-.105 10.16 6.788 7.6 9.305c-1.271 1.25-1.695 1.92-2.084 2.42-.17.219.055.285.154.336.504.258.856.496 1.311.943.456.447.699.793.959 1.289.053.098.121.318.342.152.51-.383 1.191-.801 2.462-2.049C13.305 9.88 20.317 1.422 19.539.659z" })),
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "40", height: "40", viewBox: "0 0 48 48", fill: "none" },
                            React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M25.6583 11.7601C24.7731 11.9281 23.2774 12.2105 22.3888 12.3774C22.0013 12.4502 21.3601 12.5711 20.9639 12.646C20.5676 12.721 19.8872 12.8494 19.4518 12.9314C19.0164 13.0134 18.279 13.1524 17.8131 13.2403C16.4966 13.4887 15.9152 13.5982 14.4565 13.873C13.712 14.0133 12.784 14.1883 12.3943 14.2619C12.0046 14.3355 11.3634 14.4565 10.9693 14.5306C10.5753 14.6048 10.2369 14.669 10.2173 14.6734L10.1816 14.6814L10.1856 25.1976L10.1896 35.7138L10.4191 35.7567C10.5454 35.7803 10.9551 35.8575 11.3295 35.9282C12.9599 36.2361 13.9786 36.4282 14.4803 36.5223C14.7764 36.5779 15.4568 36.7061 15.9923 36.8073C16.5279 36.9084 17.3401 37.0616 17.7973 37.1477C18.2545 37.2338 18.8779 37.3513 19.1827 37.4088C19.4874 37.4664 20.1679 37.5947 20.6947 37.694C21.2215 37.7933 22.3366 38.0034 23.1725 38.161C24.0085 38.3186 25.0523 38.5152 25.4921 38.598C25.9318 38.6808 26.3077 38.7525 26.3273 38.7573L26.3629 38.7661V37.4029V36.0398L31.9717 36.0356L37.5805 36.0315L37.7072 35.9956C38.1189 35.879 38.4116 35.6339 38.5845 35.2611C38.6182 35.1884 38.659 35.0791 38.6752 35.0182C38.7037 34.9107 38.7046 34.614 38.7046 25.2018V15.4962L38.6692 15.3616C38.5381 14.8642 38.1727 14.5107 37.6589 14.3842C37.5562 14.359 37.1715 14.3568 31.9559 14.3525L26.3629 14.3478V12.9953C26.3629 12.2514 26.3575 11.6401 26.351 11.6369C26.3445 11.6336 26.0328 11.6891 25.6583 11.7601ZM37.5726 25.1939V34.9311L31.9638 34.9271L26.355 34.9232V34.0603V33.1974L28.3143 33.1933L30.2736 33.1893V31.9545V30.7196L28.3143 30.7156L26.355 30.7116V30.292V29.8725L28.3222 29.8684L30.2894 29.8644V28.6375V27.4106L28.3222 27.4065L26.355 27.4025V26.9434V26.4842L28.3182 26.4805L30.2815 26.4767L30.2856 25.2495L30.2896 24.0223L28.3223 24.0183L26.355 24.0143V23.5314V23.0485L28.3222 23.0445L30.2894 23.0404V21.8135V20.5866L28.3222 20.5826L26.355 20.5785V20.1273V19.6761L28.3143 19.672L30.2736 19.668V18.4332V17.1983L28.3143 17.1943L26.355 17.1903L26.3508 16.3432C26.3486 15.8774 26.3501 15.4873 26.3543 15.4764C26.3603 15.4606 27.4975 15.4566 31.9672 15.4566H37.5726V25.1939ZM31.2869 18.4332V19.6682H33.5273H35.7676V18.4332V17.1982H33.5273H31.2869V18.4332ZM21.0401 20.7488C20.8837 21.047 20.6857 21.4228 20.6001 21.5839C20.5144 21.745 20.3251 22.1048 20.1794 22.3835C20.0337 22.6622 19.8041 23.1003 19.6692 23.3572C19.3926 23.8842 19.136 24.3741 18.9498 24.7308L18.8238 24.9723L19.0486 25.3958C19.1724 25.6287 19.3287 25.9225 19.3962 26.0488C19.4636 26.1751 19.5884 26.4102 19.6736 26.5713C19.7587 26.7324 19.8871 26.9746 19.9589 27.1096C20.0307 27.2446 20.1794 27.5243 20.2892 27.7311C20.399 27.9379 20.5771 28.2728 20.6849 28.4752C20.7927 28.6777 20.9859 29.0428 21.1141 29.2866C21.2424 29.5305 21.3578 29.7466 21.3706 29.767C21.3834 29.7873 21.3904 29.8074 21.3862 29.8116C21.3712 29.8266 19.1671 29.6695 19.1483 29.6521C19.1381 29.6427 19.0553 29.4675 18.9644 29.2629C18.6063 28.4576 18.1396 27.4133 17.9561 27.0067C17.7418 26.532 17.7076 26.4382 17.6544 26.1789C17.6343 26.0807 17.613 26.0059 17.6071 26.0127C17.6013 26.0195 17.5873 26.0678 17.5762 26.1201C17.5247 26.3608 17.4183 26.6362 17.1603 27.1967C17.012 27.5189 16.7661 28.0533 16.6138 28.3842C16.4616 28.7151 16.291 29.0856 16.2348 29.2075C16.1787 29.3294 16.1267 29.4353 16.1194 29.4427C16.1075 29.4549 14.2036 29.3315 14.1895 29.3177C14.1863 29.3146 14.2372 29.2137 14.3025 29.0935C14.3679 28.9733 14.5902 28.5579 14.7966 28.1704C15.1483 27.51 15.29 27.2447 15.5492 26.7613C15.8118 26.2714 15.9267 26.0562 16.1746 25.5897C16.3203 25.3154 16.4498 25.0731 16.4623 25.0513C16.484 25.0135 16.4613 24.9632 15.9438 23.9035C15.6462 23.2939 15.2832 22.5493 15.1373 22.2489C14.9913 21.9485 14.7606 21.4753 14.6245 21.1974C14.4885 20.9196 14.3795 20.6899 14.3823 20.6871C14.3864 20.683 15.971 20.5703 16.2927 20.5511L16.3635 20.5469L16.4553 20.7685C16.5057 20.8905 16.6154 21.1576 16.699 21.3623C16.7826 21.5669 16.9934 22.0799 17.1674 22.5022C17.4867 23.2771 17.5772 23.5231 17.6427 23.7942C17.6624 23.8759 17.6839 23.9428 17.6904 23.9429C17.6969 23.943 17.7023 23.933 17.7023 23.9208C17.7023 23.8843 17.8746 23.3285 17.931 23.1831C17.9755 23.0684 18.2022 22.5631 18.734 21.3939C18.7954 21.259 18.924 20.974 19.0198 20.7606C19.1157 20.5473 19.1995 20.3669 19.2061 20.3598C19.2174 20.3475 21.0188 20.2127 21.2273 20.2085L21.3245 20.2065L21.0401 20.7488ZM31.2869 21.8135V23.0406H33.5273H35.7676V21.8135V20.5865H33.5273H31.2869V21.8135ZM31.2908 25.2494L31.2948 26.4765L33.5312 26.4804L35.7676 26.4842V25.2532V24.0222H33.5272H31.2867L31.2908 25.2494ZM31.2869 28.6375V29.8645H33.5273H35.7676V28.6375V27.4104H33.5273H31.2869V28.6375ZM31.2869 31.9545V33.1895H33.5273H35.7676V31.9545V30.7195H33.5273H31.2869V31.9545Z", fill: "#333333" })),
                        React.createElement(ReactToPrint, { trigger: function () { return React.createElement("span", null,
                                " ",
                                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", width: "24", height: "24", viewBox: "0 0 40 40" },
                                    React.createElement("path", { d: "M33.62 14.41h-2.2v-10a1 1 0 0 0-1-1h-19.2a1 1 0 0 0-1 1v10H8a4.21 4.21 0 0 0-4.2 4.21v8A4.2 4.2 0 0 0 8 30.84h2v5.54a1 1 0 0 0 1 1h19.66a1 1 0 0 0 1-1v-5.54h2a4.21 4.21 0 0 0 4.2-4.2v-8a4.21 4.21 0 0 0-4.24-4.23Zm-21.4-9h17.2v9h-17.2Zm17.44 30H12v-11.6h17.66Zm6.16-8.74a2.21 2.21 0 0 1-2.2 2.2h-2v-6a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v6H8a2.21 2.21 0 0 1-2.2-2.2v-8A2.21 2.21 0 0 1 8 16.41h25.6a2.21 2.21 0 0 1 2.2 2.21Z" }),
                                    React.createElement("path", { d: "M25.35 26.32h-8.73a1 1 0 0 0 0 2h8.73a1 1 0 0 0 0-2zm0 4.5h-8.73a1 1 0 1 0 0 2h8.73a1 1 0 0 0 0-2zm4.86-12.62h-2.08a1 1 0 0 0 0 2h2.08a1 1 0 0 0 0-2z" }))); }, content: function () { return componentLongRef.current; } })))),
            React.createElement("table", { className: "table" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", { style: { width: "10%" } },
                            React.createElement("input", { type: "text", placeholder: "Contract ID", value: filterkey.contractId, onChange: function (e) { return filterData(e, "contractId"); } })),
                        React.createElement("th", { style: { width: "10%" } },
                            React.createElement("input", { type: "text", placeholder: "Title", value: filterkey.searchTitle, onChange: function (e) { return filterData(e, "searchTitle"); } })),
                        React.createElement("th", { style: { width: "10%" } },
                            React.createElement("input", { type: "text", placeholder: "Employee", value: filterkey.Employee, onChange: function (e) { return filterData(e, "Employee"); } })),
                        React.createElement("th", { style: { width: "10%" } },
                            React.createElement("input", { type: "text", placeholder: "Contract type", value: filterkey.ContractType, onChange: function (e) { return filterData(e, "ContractType"); } })),
                        React.createElement("th", { style: { width: "10%" } },
                            React.createElement("input", { type: "text", placeholder: "StartDate", value: filterkey.StartDate, onChange: function (e) { return filterData(e, "StartDate"); } })),
                        React.createElement("th", { style: { width: "10%" } },
                            React.createElement("input", { type: "text", placeholder: "EndDate", value: filterkey.EndDate, onChange: function (e) { return filterData(e, "EndDate"); } })),
                        React.createElement("th", { style: { width: "10%" } },
                            React.createElement("input", { type: "text", placeholder: "Contract Status", value: filterkey.contractStatus, onChange: function (e) { return filterData(e, "contractStatus"); } })),
                        React.createElement("th", { style: { width: "10%" } },
                            React.createElement("input", { type: "text", placeholder: "Contract Signed", value: filterkey.ContractSigned, onChange: function (e) { return filterData(e, "ContractSigned"); } })),
                        React.createElement("th", { style: { width: "10%" } },
                            React.createElement("input", { type: "text", placeholder: "Contract Changed", value: filterkey.ContractChanged, onChange: function (e) { return filterData(e, "ContractChanged"); } })),
                        React.createElement("th", { style: { width: "10%" } }))),
                React.createElement("tbody", { ref: componentLongRef }, AllContacts.map(function (item, index) {
                    return (React.createElement("tr", { key: index },
                        React.createElement("td", null, item.ContractId),
                        React.createElement("td", { className: 'full-name' },
                            React.createElement("a", { href: "https://hhhhteams.sharepoint.com/sites/HHHH/HR/SitePages/Contract-Profile-SPFx.aspx?SmartID=".concat(item.Id), target: "_blank" }, item.Title)),
                        React.createElement("td", { className: 'full-name' }, item.HHHHStaffTitle),
                        React.createElement("td", null, item.typeOfContract),
                        React.createElement("td", null, item.startDate != null ? moment(item.startDate).format("DD/MM/YYYY") : ""),
                        React.createElement("td", null, item.endDate != null ? moment(item.endDate).format("DD/MM/YYYY") : ""),
                        React.createElement("td", null, item.contractStatus),
                        React.createElement("td", null, item.ContractSigned != null ? moment(item.ContractSigned).format("DD/MM/YYYY") : ""),
                        React.createElement("td", null, item.ContractChanged != null ? moment(item.ContractChanged).format("DD/MM/YYYY") : ""),
                        React.createElement("td", null,
                            React.createElement("a", null,
                                React.createElement("img", { src: "/_layouts/images/edititem.gif" })))));
                }))),
            openCreateContract == true ? React.createElement(CreateContract, { openCreateContract: openCreateContract, callback: Callback, prop: true }) : null)));
};
export default ContractData;
//# sourceMappingURL=Contract.js.map