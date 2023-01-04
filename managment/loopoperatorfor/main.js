console.log('Init task script')

class TemplateGenerator {

    lines = Array();
    answers = {};

    constructor() {
        this.createTemplate();
    }

    getName() {
        return 'Оператор циклу for';
    }

    setTemplate(pane) {
        for (let i = 0; i < this.lines.length; i++) pane.append(this.lines[i]);
    }

    getAnswers() {
        return this.answers;
    }

    createTemplate() {
        this.createFirstsLine();
        let variables = this.createVariables();
        this.createFirstExpression(variables);
        this.createSecondExpression(variables);
        this.createThirdExpression(variables);
        this.createLastLine();
    }

    createVariables() {
        let x = window.random.nextInt(10);
        let y = window.random.nextInt(10);
        let z = 0;
        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tint", CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" x="),
                window.CodeGenerator.createPart(x),
                window.CodeGenerator.createPart("", CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" y"),
                window.CodeGenerator.createPart(";")
        ));

        return new Variables(x, y, z);
    }

    createFirstExpression(variables) {
        let
                n1 = window.random.nextInt(10);
        let
                c1 = variables.y > n1 ? CodeGenerator.CompareOperator.MORE : CodeGenerator.CompareOperator.LESS;
        let
                ido1 = variables.y > n1 ? CodeGenerator.IDOperator.SUFIXDECREMENT : CodeGenerator.IDOperator.SUFIXINCREMENT;
        let
                o1 = window.random.nextInt(2) == 1 ? CodeGenerator.Operator.ADDITION : CodeGenerator.Operator.DIFFERENCE;

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tfor", CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("(y="),
                window.CodeGenerator.createPart(variables.y),
                window.CodeGenerator.createPart("; y"),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(c1)),
                window.CodeGenerator.createPart(n1),
                window.CodeGenerator.createPart("; "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("y", ido1),
                window.CodeGenerator.createPart(") x"),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(o1)),
                window.CodeGenerator.createPart("=y;")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tprintf("),
                window.CodeGenerator.createPart("\"%d\\n\"", CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", x)"),
                window.CodeGenerator.createPart(";")
        ));

        for (; CodeGenerator.compare(variables.y, n1, c1) == 1; variables.y = CodeGenerator.exeOperator(variables.y, ido1))
            variables.x = CodeGenerator.exeOperator(variables.x, variables.y, o1);

        this.answers[0] = variables.x.toString();
    }

    createThirdExpression(variables) {
        variables.x = window.random.nextInt(10);
        variables.y = window.random.nextInt(10);
        let
                c1 = variables.x > variables.y ? CodeGenerator.CompareOperator.MORE : CodeGenerator.CompareOperator.LESS;
        let
                ido1 = variables.x > variables.y ? CodeGenerator.IDOperator.PREFIXDECREMENT : CodeGenerator.IDOperator.PREFIXINCREMENT,
                ido2 = variables.x > variables.y ? CodeGenerator.IDOperator.PREFIXINCREMENT : CodeGenerator.IDOperator.PREFIXDECREMENT;
        let
                n1 = variables.x > variables.y ? variables.x : variables.y,
                n2 = variables.x > variables.y ? variables.y : variables.x;
        let n3 = n1 - n2;
        n3 = (n3 % 2) == 1 ? n3 + 1 : n3;
        n3 /= 2;
        n1 -= n3;
        n2 += n3;

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tfor", CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("(x="),
                window.CodeGenerator.createPart(variables.x),
                window.CodeGenerator.createPart(", y="),
                window.CodeGenerator.createPart(variables.y),
                window.CodeGenerator.createPart("; x"),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(c1)),
                window.CodeGenerator.createPart("y; "),
                window.CodeGenerator.createPart("", CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("x", ido1),
                window.CodeGenerator.createPart(", "),
                window.CodeGenerator.createPart("", CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("y", ido2),
                window.CodeGenerator.createPart(") ;")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tprintf("),
                window.CodeGenerator.createPart("\"%d\\n\"", CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", x)"),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tprintf("),
                window.CodeGenerator.createPart("\"%d\\n\"", CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", y)"),
                window.CodeGenerator.createPart(";")
        ));

        variables.x = variables.x > variables.y ? n1 : n2;
        variables.y = variables.x > variables.y ? n2 : n1;

        this.answers[2] = variables.x.toString();
        this.answers[3] = variables.y.toString();
    }

    createSecondExpression(variables) {
        let
                n1 = window.random.nextInt(10),
                n2 = window.random.nextInt(10);
        let
                c1 = n1 > n2 ? CodeGenerator.CompareOperator.MORE : CodeGenerator.CompareOperator.LESS;
        let
                ido1 = n1 > n2 ? CodeGenerator.IDOperator.SUFIXDECREMENT : CodeGenerator.IDOperator.SUFIXINCREMENT;

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tfor", CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("(y="),
                window.CodeGenerator.createPart(n1),
                window.CodeGenerator.createPart("; (x=y)"),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(c1)),
                window.CodeGenerator.createPart(n2),
                window.CodeGenerator.createPart("; "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("y", ido1),
                window.CodeGenerator.createPart(") ;")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tprintf("),
                window.CodeGenerator.createPart("\"%d\\n\"", CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", x)"),
                window.CodeGenerator.createPart(";")
        ));

        variables.x = variables.y = n2

        this.answers[1] = variables.x.toString();
    }

    createFirstsLine() {
        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("#include", window.CodeGenerator.CodeType.DIRECTIVE),
                window.CodeGenerator.createPart("", CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" <stdio.h>", window.CodeGenerator.CodeType.LIBRARY)
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart(" ")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("void", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" main()")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("{")
        ));
    }

    createLastLine() {
        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("}")
        ));
    }
}

class Variables {
    x;
    y;
    z;

    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

window.mainController.setTask(new TemplateGenerator());