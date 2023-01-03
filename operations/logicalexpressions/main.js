console.log('Init task script')

class TemplateGenerator {

    lines = Array();
    answers = {};

    constructor() {
        this.createTemplate();
    }

    getName() {
        return 'Вирази логіки';
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
        this.createLastLine();
    }

    createVariables() {
        let x = window.random.nextInt(10);
        let y = window.random.nextInt(10);
        let z = window.random.nextInt(10);
        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                CodeGenerator.createPart("\tint", CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                CodeGenerator.createPart(" x="),
                CodeGenerator.createPart(x),
                CodeGenerator.createPart(", y="),
                CodeGenerator.createPart(y),
                CodeGenerator.createPart(", z="),
                CodeGenerator.createPart(z),
                CodeGenerator.createPart(";")
        ));

        return new Variables(x, y, z);
    }

    createFirstExpression(variables) {

        let
                l1 = window.random.key(CodeGenerator.LogicalOperator),
                l2 = window.random.key(CodeGenerator.LogicalOperator);

        let
                ido1 = window.random.key(CodeGenerator.IDOperator, 2),
                ido2 = window.random.key(CodeGenerator.IDOperator, 2),
                ido3 = window.random.key(CodeGenerator.IDOperator, 2);

        variables.x = CodeGenerator.exeOperator(variables.x, ido1);

        if (l1 == CodeGenerator.LogicalOperator.AND) {
            if (variables.x == 0) {
                if (l2 == CodeGenerator.LogicalOperator.OR)
                    variables.z = CodeGenerator.exeOperator(variables.z, ido3);
            } else {
                variables.y = CodeGenerator.exeOperator(variables.y, ido2);
                if (variables.y == 0) {
                    if (l2 == CodeGenerator.LogicalOperator.OR)
                        variables.z = CodeGenerator.exeOperator(variables.z, ido3);
                } else {
                    if (l2 == CodeGenerator.LogicalOperator.AND)
                        variables.z = CodeGenerator.exeOperator(variables.z, ido3);
                }
            }
        } else {
            if (variables.x == 0) {
                variables.y = CodeGenerator.exeOperator(variables.y, ido2);
                if (variables.y == 0) {
                    if (l2 == CodeGenerator.LogicalOperator.OR) {
                        variables.z = CodeGenerator.exeOperator(variables.z, ido3);
                    }
                } else {
                    if (l2 == CodeGenerator.LogicalOperator.AND) {
                        variables.z = CodeGenerator.exeOperator(variables.z, ido3);
                    }
                }
            }
        }

        this.lines.push(window.HBox(CodeGenerator.createPart(" ")));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                CodeGenerator.createPart("\t"),
                CodeGenerator.createPart("x", ido1),
                CodeGenerator.createPart(CodeGenerator.getOperator(l1)),
                CodeGenerator.createPart("y", ido2),
                CodeGenerator.createPart(CodeGenerator.getOperator(l2)),
                CodeGenerator.createPart("z", ido3),
                CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                CodeGenerator.createPart("\tprintf("),
                CodeGenerator.createPart("\"%d\\n\"", CodeGenerator.CodeType.STRING),
                CodeGenerator.createPart(", y);")
        ));

        this.answers[0] = variables.y.toString();

    }

    createSecondExpression(variables) {

        let
                l1 = window.random.key(CodeGenerator.LogicalOperator),
                l2 = window.random.key(CodeGenerator.LogicalOperator);

        let
                ido1 = window.random.key(CodeGenerator.IDOperator, 2),
                ido2 = window.random.key(CodeGenerator.IDOperator, 2),
                ido3 = window.random.key(CodeGenerator.IDOperator, 2);

        variables.x = window.random.nextInt(10);
        variables.y = window.random.nextInt(10);
        variables.z = window.random.nextInt(10);
        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                CodeGenerator.createPart("\tx="),
                CodeGenerator.createPart(variables.x),
                CodeGenerator.createPart(", y="),
                CodeGenerator.createPart(variables.y),
                CodeGenerator.createPart(", z="),
                CodeGenerator.createPart(variables.z),
                CodeGenerator.createPart(";")
        ));

        variables.x = CodeGenerator.exeOperator(variables.x, ido1);

        if (l1 == CodeGenerator.LogicalOperator.AND) {
            if (variables.x == 0) {
                if (l2 == CodeGenerator.LogicalOperator.OR)
                    variables.z = CodeGenerator.exeOperator(variables.z, ido3);
            } else {
                variables.y = CodeGenerator.exeOperator(variables.y, ido2);
                if (variables.y == 0) {
                    if (l2 == CodeGenerator.LogicalOperator.OR)
                        variables.z = CodeGenerator.exeOperator(variables.z, ido3);
                } else {
                    if (l2 == CodeGenerator.LogicalOperator.AND)
                        variables.z = CodeGenerator.exeOperator(variables.z, ido3);
                }
            }
        } else {
            if (variables.x == 0) {
                variables.y = CodeGenerator.exeOperator(variables.y, ido2);
                if (variables.y == 0) {
                    if (l2 == CodeGenerator.LogicalOperator.OR) {
                        variables.z = CodeGenerator.exeOperator(variables.z, ido3);
                    }
                } else {
                    if (l2 == CodeGenerator.LogicalOperator.AND) {
                        variables.z = CodeGenerator.exeOperator(variables.z, ido3);
                    }
                }
            }
        }

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                CodeGenerator.createPart("\t"),
                CodeGenerator.createPart("x", ido1),
                CodeGenerator.createPart(CodeGenerator.getOperator(l1)),
                CodeGenerator.createPart("y", ido2),
                CodeGenerator.createPart(CodeGenerator.getOperator(l2)),
                CodeGenerator.createPart("z", ido3),
                CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                CodeGenerator.createPart("\tprintf("),
                CodeGenerator.createPart("\"%d\\n\"", CodeGenerator.CodeType.STRING),
                CodeGenerator.createPart(", x);")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                CodeGenerator.createPart("\tprintf("),
                CodeGenerator.createPart("\"%d\\n\"", CodeGenerator.CodeType.STRING),
                CodeGenerator.createPart(", y);")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                CodeGenerator.createPart("\tprintf("),
                CodeGenerator.createPart("\"%d\\n\"", CodeGenerator.CodeType.STRING),
                CodeGenerator.createPart(", z);")
        ));


        this.answers[1] = variables.x.toString();
        this.answers[2] = variables.y.toString();
        this.answers[3] = variables.z.toString();
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