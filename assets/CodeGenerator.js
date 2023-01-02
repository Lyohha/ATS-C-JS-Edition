'use strict';

window.CodeGenerator = {

    CodeType: {
        OPERATOR: 1,
        TEXT: 2,
        STRING: 3,
        NUMBER: 4,
        DIRECTIVE: 5,
        LIBRARY: 6,
        DEFINE1: 7,
        DEFINE2: 8,
        COMMENT: 9,
        TAB: 10,
        SPACE: 11,
    },

    Operator: {
        ADDITION: 21,
        DIFFERENCE: 22,
        MULTIPLICATION: 23,
        DIVISION: 24
    },

    IDOperator: {
        PREFIXINCREMENT: 31,
        PREFIXDECREMENT: 32,
        SUFIXINCREMENT: 33,
        SUFIXDECREMENT: 34
    },

    CompareOperator: {
        MORE: 41,
        LESS: 42,
        MOREOREQUEL: 43,
        LESSOREQUEL: 44,
        EQUEL: 45,
        NOTEQUEL: 46
    },

    LogicalOperator: {
        AND: 51,
        OR: 52
    },

    createPart: function(text, operator = null) {

        if(operator == null)
            operator = window.CodeGenerator.CodeType.TEXT;

        if(typeof text == 'number') {
            operator = window.CodeGenerator.CodeType.NUMBER;
            text = text.toString().replace(',', '.');
        }

        text = text.replace('<', '&#60;').replace('>', '&#62;');

        let label = $('<div></div>');

        switch (operator) {
            case window.CodeGenerator.CodeType.TEXT:
                label.addClass("text");
                break;
            case window.CodeGenerator.CodeType.STRING:
                label.addClass("string");
                break;
            case window.CodeGenerator.CodeType.NUMBER:
                label.addClass("numbers");
                break;
            case window.CodeGenerator.CodeType.DIRECTIVE:
                label.addClass("preprocessor-directive");
                break;
            case window.CodeGenerator.CodeType.LIBRARY:
                label.addClass("library");
                break;
            case window.CodeGenerator.CodeType.OPERATOR:
                label.addClass("operator");
                break;
            case window.CodeGenerator.CodeType.DEFINE1:
                label.addClass("define-operand1");
                break;
            case window.CodeGenerator.CodeType.DEFINE2:
                label.addClass("define-operand2");
                break;
            case window.CodeGenerator.CodeType.COMMENT:
                label.addClass("comment");
                break;
            case window.CodeGenerator.CodeType.TAB:
                label.addClass("tab");
                text = '&emsp;&emsp;';
                break;
            case window.CodeGenerator.CodeType.SPACE:
                label.addClass("space");
                text = '<pre> </pre>';
                break;
        }

        switch(operator) {
            case window.CodeGenerator.IDOperator.SUFIXDECREMENT:
                text = text + "--";
                break;
            case window.CodeGenerator.IDOperator.PREFIXDECREMENT:
                text = "--" + text;
                break;
            case window.CodeGenerator.IDOperator.SUFIXINCREMENT:
                text = text + "++";
                break;
            case window.CodeGenerator.IDOperator.PREFIXINCREMENT:
                text = "++" + text;
                break;
        }

        label.html(text);

        return label;
    },

    exeOperator: function(a, b, op = null, integer = false) {

        if(op == null)
            op = b;

        switch (op) {
            case window.CodeGenerator.Operator.MULTIPLICATION:
                return a * b;
            case window.CodeGenerator.Operator.DIFFERENCE:
                return a - b;
            case window.CodeGenerator.Operator.DIVISION:
                return integer ? parseInt(a / b) : a / b;
            case window.CodeGenerator.Operator.ADDITION:
                return a + b;
            case window.CodeGenerator.IDOperator.PREFIXDECREMENT:
            case window.CodeGenerator.IDOperator.SUFIXDECREMENT:
                a--;
                return a;
            case window.CodeGenerator.IDOperator.SUFIXINCREMENT:
            case window.CodeGenerator.IDOperator.PREFIXINCREMENT:
                a++;
                return a;
            default:
                return 0;
        }
    },

    compare: function(a, b, operator) {
        switch (operator) {
            case window.CodeGenerator.CompareOperator.EQUEL:
                return a == b ? 1 : 0;
            case window.CodeGenerator.CompareOperator.NOTEQUEL:
                return a != b ? 1 : 0;
            case window.CodeGenerator.CompareOperator.MOREOREQUEL:
                return a >= b ? 1 : 0;
            case window.CodeGenerator.CompareOperator.LESSOREQUEL:
                return a <= b ? 1 : 0;
            case window.CodeGenerator.CompareOperator.MORE:
                return a > b ? 1 : 0;
            case window.CodeGenerator.CompareOperator.LESS:
                return a < b ? 1 : 0;
            case window.CodeGenerator.LogicalOperator.OR:
                return a || b;
            case window.CodeGenerator.LogicalOperator.AND:
                return a && b;
            default:
                return 0;
        }
    },

    getOperator: function(operator) {
        switch (operator) {
            case window.CodeGenerator.Operator.ADDITION:
                return "+";
            case window.CodeGenerator.Operator.DIVISION:
                return "/";
            case window.CodeGenerator.Operator.DIFFERENCE:
                return "-";
            case window.CodeGenerator.Operator.MULTIPLICATION:
                return "*";
            case window.CodeGenerator.LogicalOperator.AND:
                return "&&";
            case window.CodeGenerator.LogicalOperator.OR:
                return "||";
            case window.CodeGenerator.IDOperator.PREFIXDECREMENT:
            case window.CodeGenerator.IDOperator.SUFIXDECREMENT:
                return "--";
            case window.CodeGenerator.IDOperator.SUFIXINCREMENT:
            case window.CodeGenerator.IDOperator.PREFIXINCREMENT:
                return "++";
            case window.CodeGenerator.CompareOperator.LESS:
                return "<";
            case window.CodeGenerator.CompareOperator.MORE:
                return ">";
            case window.CodeGenerator.CompareOperator.EQUEL:
                return "==";
            case window.CodeGenerator.CompareOperator.NOTEQUEL:
                return "!=";
            case window.CodeGenerator.CompareOperator.LESSOREQUEL:
                return "<=";
            case window.CodeGenerator.CompareOperator.MOREOREQUEL:
                return ">=";
            default:
                return "";
        }
    },
};


window.HBox = function() {

    let $line = $('<div></div>');

    let args = arguments;

    for(let i = 0; i < args.length; i++) {
        $line.append(args[i]);
    }

    $line.addClass('code-line');

    return $line;
}

window.random = {
    key: function(obj) {
        let keys = Object.keys(obj);
        
        return obj[keys[window.random.nextInt(keys.length)]];
    },
    nextInt: function(max) {
        return Math.floor(Math.random() * max);
    }
}