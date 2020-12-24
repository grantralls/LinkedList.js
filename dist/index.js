"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = __importDefault(require("./Node"));
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.size = 0;
    }
    /**
     * @param entry data to append. This can be variable due to [Typescript Generics](https://www.typescriptlang.org/docs/handbook/generics.html)
     */
    LinkedList.prototype.append = function (entry) {
        if (this.tail == undefined) {
            this.addFirstNode(entry);
        }
        else {
            this.tail.next = new Node_1.default(entry);
            this.tail = this.tail.next;
        }
        this.size++;
    };
    LinkedList.prototype.addFirstNode = function (entry) {
        var newNode = new Node_1.default(entry);
        this.head = this.tail = newNode;
    };
    LinkedList.prototype.traverse = function () {
        var currNode;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    currNode = this.head;
                    _a.label = 1;
                case 1:
                    if (!(currNode != undefined)) return [3 /*break*/, 3];
                    return [4 /*yield*/, currNode.data];
                case 2:
                    _a.sent();
                    currNode = currNode.next;
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    };
    LinkedList.prototype.contains = function (value) {
        if (this.size == 0) {
            return false;
        }
        var currNode = this.head;
        while (currNode != undefined && currNode.data !== value) {
            currNode = currNode.next;
        }
        if (currNode != undefined) {
            return currNode.data === value;
        }
        return false;
    };
    LinkedList.prototype.getHeadValue = function () {
        if (this.head != undefined) {
            return this.head.data;
        }
        return undefined;
    };
    LinkedList.prototype.getTailValue = function () {
        if (this.tail != undefined) {
            return this.tail.data;
        }
        return undefined;
    };
    return LinkedList;
}());
exports.default = LinkedList;
