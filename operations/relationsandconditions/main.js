console.log('Init task script')

class TemplateGenerator {

    lines = Array();
    answers = {};

    constructor() {
        this.createTemplate();
    }

    getName() {
        return 'Операції відношення та умов';
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
        let x = window.random.nextInt(30);
        let y = window.random.nextInt(30);
        let z = window.random.nextInt(30);
        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tint", CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" x="),
                window.CodeGenerator.createPart(x),
                window.CodeGenerator.createPart(", y="),
                window.CodeGenerator.createPart(y),
                window.CodeGenerator.createPart(", z="),
                window.CodeGenerator.createPart(z),
                window.CodeGenerator.createPart(";")
        ));

        return new Variables(x, y, z);
    }

    createFirstExpression(variables) {
        let o1, o2;
        let
                c1 = window.random.key(CodeGenerator.CompareOperator);
        while (true) {
            let y = variables.y;
            o1 = window.random.key(CodeGenerator.Operator);
            o2 = window.random.key(CodeGenerator.Operator);

            if (o2 == CodeGenerator.Operator.DIVISION && variables.z == 0)
                continue;
            y = parseInt(CodeGenerator.exeOperator(y, variables.z, o2));
            if (y == 0 && o1 == CodeGenerator.Operator.DIVISION)
                continue;
            variables.y = y;
            variables.x = parseInt(CodeGenerator.exeOperator(variables.x, y, o1));

            break;
        }

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tx"),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(o1)),
                window.CodeGenerator.createPart("=y"),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(o2)),
                window.CodeGenerator.createPart("=z;")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                //window.CodeGenerator.createPart("\tPRINT(", CodeGenerator.CodeType.DEFINE1),
                window.CodeGenerator.createPart("\tprintf("),
                window.CodeGenerator.createPart("\"%d\\n\"", CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("x"),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(c1)),
                window.CodeGenerator.createPart("y?y:x"),
                //window.CodeGenerator.createPart(")", CodeGenerator.CodeType.DEFINE1),
                window.CodeGenerator.createPart(")"),
                window.CodeGenerator.createPart(";")
        ));

        this.answers[0] = CodeGenerator.compare(variables.x, variables.y, c1) == 1 ? variables.y.toString() : variables.x.toString();

    }

    createSecondExpression(variables) {
        let
                ido1 = window.random.key(CodeGenerator.IDOperator),
                ido2 = window.random.key(CodeGenerator.IDOperator);
        let
                c1 = window.random.key(CodeGenerator.CompareOperator);
        let o1;
        do {
            o1 = window.random.key(CodeGenerator.Operator);
        }
        while (o1 == CodeGenerator.Operator.DIVISION
                && (CodeGenerator.compare(variables.x, variables.y, c1) == 1 ? variables.x : variables.y) == 1
                && ido1 == CodeGenerator.IDOperator.PREFIXDECREMENT);

        if (CodeGenerator.compare(variables.x, variables.y, c1) == 1) {
            if (ido1 == CodeGenerator.IDOperator.PREFIXDECREMENT || ido1 == CodeGenerator.IDOperator.PREFIXINCREMENT) {
                variables.x = CodeGenerator.exeOperator(variables.x, ido1);
                variables.z = parseInt(CodeGenerator.exeOperator(variables.z, variables.x, o1));
            } else {
                variables.z = parseInt(CodeGenerator.exeOperator(variables.z, variables.x, o1));
                variables.x = CodeGenerator.exeOperator(variables.x, ido1);
            }
        } else {
            if (ido2 == CodeGenerator.IDOperator.PREFIXDECREMENT || ido2 == CodeGenerator.IDOperator.PREFIXINCREMENT) {
                variables.y = CodeGenerator.exeOperator(variables.y, ido2);
                variables.z = parseInt(CodeGenerator.exeOperator(variables.z, variables.y, o1));
            } else {
                variables.z = parseInt(CodeGenerator.exeOperator(variables.z, variables.y, o1));
                variables.y = CodeGenerator.exeOperator(variables.y, ido2);
            }
        }

        this.lines.push(window.HBox(
                //window.CodeGenerator.createPart("\tPRINT(", CodeGenerator.CodeType.DEFINE1),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tprintf("),
                window.CodeGenerator.createPart("\"%d\\n\"", CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("z"),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(o1)),
                window.CodeGenerator.createPart("=x"),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(c1)),
                window.CodeGenerator.createPart("y?"),
                window.window.CodeGenerator.createPart("x", ido1),
                window.CodeGenerator.createPart(":"),
                window.window.CodeGenerator.createPart("y", ido2),
                //window.CodeGenerator.createPart(")", CodeGenerator.CodeType.DEFINE1),
                window.CodeGenerator.createPart(")"),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
                ///window.CodeGenerator.createPart("\tPRINT(", CodeGenerator.CodeType.DEFINE1),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tprintf("),
                window.CodeGenerator.createPart("\"%d\\n\"", CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", "),
                window.CodeGenerator.createPart("y"),
                //window.CodeGenerator.createPart(")", CodeGenerator.CodeType.DEFINE1),
                window.CodeGenerator.createPart(")"),
                window.CodeGenerator.createPart(";")
        ));

        this.answers[1] = variables.z.toString();
        this.answers[2] = variables.y.toString();
    }

    createThirdExpression(variables) {
        variables.x = window.random.nextInt(10);
        variables.y = window.random.nextInt(10);
        variables.z = window.random.nextInt(10);

        let
                c1 = window.random.key(CodeGenerator.CompareOperator),
                c2 = window.random.key(CodeGenerator.CompareOperator);
        let result = CodeGenerator.compare(CodeGenerator.compare(variables.z, variables.y, c1), variables.x, c2);

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tx="),
                window.CodeGenerator.createPart(variables.x),
                window.CodeGenerator.createPart("; y="),
                window.CodeGenerator.createPart(variables.y),
                window.CodeGenerator.createPart("; z="),
                window.CodeGenerator.createPart(variables.z),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
                //window.CodeGenerator.createPart("\tPRINT(", CodeGenerator.CodeType.DEFINE1),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tprintf("),
                window.CodeGenerator.createPart("\"%d\\n\"", CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("(z"),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(c1)),
                window.CodeGenerator.createPart("y"),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(c2)),
                window.CodeGenerator.createPart("x)?1:0"),
                //window.CodeGenerator.createPart(")", CodeGenerator.CodeType.DEFINE1),
                window.CodeGenerator.createPart(")"),
                window.CodeGenerator.createPart(";")
        ));

        this.answers[3] = result.toString();

    }

    createFirstsLine() {
        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("#include", CodeGenerator.CodeType.DIRECTIVE),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" <stdio.h>", CodeGenerator.CodeType.LIBRARY)
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart(" ")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("void", CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
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