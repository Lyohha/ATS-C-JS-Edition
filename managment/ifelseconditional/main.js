console.log('Init task script')

class TemplateGenerator {

    lines = Array();
    answers = {};

    constructor() {
        this.createTemplate();
    }

    getName() {
        return 'Умовний оператор if-else';
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
        this.createFourthExpression(variables);
        this.createLastLine();
    }

    createVariables() {
        let x = window.random.nextInt(10);
        let y = window.random.nextInt(10);
        let z = window.random.nextInt(10);
        this.lines.push(window.HBox(
            window.window.CodeGenerator.createPart("", window.window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tint", window.CodeGenerator.CodeType.OPERATOR),
                window.window.CodeGenerator.createPart("", window.window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" x, y="),
                window.CodeGenerator.createPart(y),
                window.CodeGenerator.createPart(", z;")
        ));

        return new Variables(x, y, z);
    }

    createFirstExpression(variables) {
        let
                n1 = window.random.nextInt(10),
                n2 = window.random.nextInt(10),
                n3 = window.random.nextInt(10);

        let
                c1 = window.random.key(window.CodeGenerator.CompareOperator);

        variables.x = window.CodeGenerator.compare(variables.y, n1, c1) == 1 ? n2 : n3;

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tif", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("(y"),
                window.CodeGenerator.createPart(window.CodeGenerator.getOperator(c1)),
                window.CodeGenerator.createPart(n1),
                window.CodeGenerator.createPart(") x="),
                window.CodeGenerator.createPart(n2),
                window.CodeGenerator.createPart("; "),
                window.window.CodeGenerator.createPart("", window.window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("else", window.CodeGenerator.CodeType.OPERATOR),
                window.window.CodeGenerator.createPart("", window.window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" x="),
                window.CodeGenerator.createPart(n3),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tprintf("),
                window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", x);")
        ));

        this.answers[0] = variables.x.toString();

    }

    createSecondExpression(variables) {
        let
                n1 = window.random.nextInt(10),
                n2 = window.random.nextInt(10),
                n3 = window.random.nextInt(10),
                n4 = window.random.nextInt(10);
        let
                c1 = window.random.key(window.CodeGenerator.CompareOperator),
                c2 = window.random.key(window.CodeGenerator.CompareOperator);
        if (window.CodeGenerator.compare(variables.y, n1, c1) == 1) {
            if (window.CodeGenerator.compare(variables.y, n2, c2) == 1)
                variables.x = n3;
            else
                variables.x = n4;
        }

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tif", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("(y"),
                window.CodeGenerator.createPart(window.CodeGenerator.getOperator(c1)),
                window.CodeGenerator.createPart(n1),
                window.CodeGenerator.createPart(") "),
                window.window.CodeGenerator.createPart("", window.window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("if", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("(y"),
                window.CodeGenerator.createPart(window.CodeGenerator.getOperator(c2)),
                window.CodeGenerator.createPart(n2),
                window.CodeGenerator.createPart(") x="),
                window.CodeGenerator.createPart(n3),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\telse ", window.CodeGenerator.CodeType.OPERATOR),
                window.window.CodeGenerator.createPart("", window.window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("x="),
                window.CodeGenerator.createPart(n4),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tprintf("),
                window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", x);")
        ));

        this.answers[1] = variables.x.toString();
    }

    createThirdExpression(variables) {
        let
                n1 = window.random.nextInt(10),
                n2 = window.random.nextInt(10),
                n3 = window.random.nextInt(10),
                n4 = window.random.nextInt(10),
                n5 = window.random.nextInt(10);
        let
                c1 = window.random.key(window.CodeGenerator.CompareOperator),
                c2 = window.random.key(window.CodeGenerator.CompareOperator);

        if ((variables.z = window.CodeGenerator.compare(variables.y, n1, c1)) == 1)
            variables.x = n2;
        else if (window.CodeGenerator.compare(variables.y, n3, c2) == 1)
            variables.x = n4;
        else
            variables.x = n5;

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tif", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("(z=y"),
                window.CodeGenerator.createPart(window.CodeGenerator.getOperator(c1)),
                window.CodeGenerator.createPart(n1),
                window.CodeGenerator.createPart(") x="),
                window.CodeGenerator.createPart(n2),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\telse if", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("(y"),
                window.CodeGenerator.createPart(window.CodeGenerator.getOperator(c2)),
                window.CodeGenerator.createPart(n3),
                window.CodeGenerator.createPart(") x="),
                window.CodeGenerator.createPart(n4),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\telse ", window.CodeGenerator.CodeType.OPERATOR),
                window.window.CodeGenerator.createPart("", window.window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("x="),
                window.CodeGenerator.createPart(n5),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tprintf("),
                window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", x);")
        ));

        this.answers[2] = variables.x.toString();

    }

    createFourthExpression(variables) {
        let n1 = window.random.nextInt(10);
        let vars = ["x", "y", "z"];
        let pos = window.random.nextInt(vars.length);
        if ((variables.x = variables.z = variables.y) != 0) {
            if (pos == 0)
                variables.x = n1;
        }

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tif", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("(x=z=y) ; "),
                window.window.CodeGenerator.createPart("", window.window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(vars[pos]),
                window.CodeGenerator.createPart("="),
                window.CodeGenerator.createPart(n1),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tprintf("),
                window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", x);")
        ));

        this.answers[3] = variables.x.toString();
    }

    createFirstsLine() {
        this.lines.push(window.HBox(
                window.window.CodeGenerator.createPart("#include", window.CodeGenerator.CodeType.DIRECTIVE),
                window.window.CodeGenerator.createPart("", window.window.CodeGenerator.CodeType.SPACE),
                window.window.CodeGenerator.createPart(" <stdio.h>", window.CodeGenerator.CodeType.LIBRARY)
        ));

        this.lines.push(window.HBox(
                window.window.CodeGenerator.createPart(" ")
        ));

        this.lines.push(window.HBox(
                window.window.CodeGenerator.createPart("void", window.CodeGenerator.CodeType.OPERATOR),
                window.window.CodeGenerator.createPart("", window.window.CodeGenerator.CodeType.SPACE),
                window.window.CodeGenerator.createPart(" main()")
        ));

        this.lines.push(window.HBox(
                window.window.CodeGenerator.createPart("{")
        ));
    }

    createLastLine() {
        this.lines.push(window.HBox(
                window.window.CodeGenerator.createPart("}")
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