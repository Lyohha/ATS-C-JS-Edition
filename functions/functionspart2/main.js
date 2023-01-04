console.log('Init task script')

class TemplateGenerator {

    lines = Array();
    answers = {};

    constructor() {
        this.createTemplate();
    }

    getName() {
        return 'Класи пам\'яті: функції (частина 2)';
    }

    setTemplate(pane) {
        for (let i = 0; i < this.lines.length; i++) pane.append(this.lines[i]);
    }

    getAnswers() {
        return this.answers;
    }

    createTemplate() {
        let variables = this.createFirstsLine();
        let type = window.random.key(Type);
        this.createExpression(variables, type);
        this.createReset();
    }

    createExpression(variables, type) {
        switch (type) {
            case Type.NEW:
                this.createFirstExpression(variables);
                break;
            case Type.LAST:
                this.createSecondExpression(variables);
                break;
            case Type.NEXT:
                this.createThirdExpression(variables);
                break;
        }
    }

    createFirstExpression(variables) {
        let
                n1 = window.random.nextInt(10),
                n2;
        n2 = n1 < 5 ? n1 + 4 : n1 - 4;
        let
                ido1 = n1 < 5 ? window.CodeGenerator.IDOperator.SUFIXINCREMENT : window.CodeGenerator.IDOperator.SUFIXDECREMENT;
        let
                c1 = n1 < 5 ? window.CodeGenerator.CompareOperator.LESS : window.CodeGenerator.CompareOperator.MORE;

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tfor", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("(j="),
                window.CodeGenerator.createPart(n1),
                window.CodeGenerator.createPart("; j"),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(c1)),
                window.CodeGenerator.createPart(n2),
                window.CodeGenerator.createPart("; "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("j", ido1),
                window.CodeGenerator.createPart(")")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("printf("),
                window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", new(i+j)"),
                window.CodeGenerator.createPart(")"),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("}")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("int ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("new("),
                window.CodeGenerator.createPart("int ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("i)")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("{")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tauto int ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("j="),
                window.CodeGenerator.createPart(variables.j),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\treturn "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("(i=j"),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(variables.o1)),
                window.CodeGenerator.createPart("=i);")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("}")
        ));

        for (let i = 0; window.CodeGenerator.compare(n1, n2, c1) == 1; n1 = window.CodeGenerator.exeOperator(n1, ido1), i++)
            this.answers[i] = parseInt(CodeGenerator.exeOperator(variables.j, variables.globalI + n1, variables.o1)).toString();

    }

    createSecondExpression(variables) {
        let
                n1 = window.random.nextInt(10),
                n2;
        n2 = n1 < 5 ? n1 + 4 : n1 - 4;
        let
                ido1 = n1 < 5 ? window.CodeGenerator.IDOperator.SUFIXINCREMENT : window.CodeGenerator.IDOperator.SUFIXDECREMENT;
        let
                c1 = n1 < 5 ? window.CodeGenerator.CompareOperator.LESS : window.CodeGenerator.CompareOperator.MORE;

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tfor", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("(j="),
                window.CodeGenerator.createPart(n1),
                window.CodeGenerator.createPart("; j"),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(c1)),
                window.CodeGenerator.createPart(n2),
                window.CodeGenerator.createPart("; "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("j", ido1),
                window.CodeGenerator.createPart(")")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("printf("),
            window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", last(i)"),
                window.CodeGenerator.createPart(")"),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("}")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("int ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("last("),
                window.CodeGenerator.createPart("int ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("j)")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("{")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tstatic int ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("i="),
                window.CodeGenerator.createPart(variables.i),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\treturn "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("j="),
                window.CodeGenerator.createPart("i", variables.ido2),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("}")
        ));

        for (let i = 0; i < 4; i++) {
            this.answers[i] = variables.i.toString();
            variables.i = window.CodeGenerator.exeOperator(variables.i, variables.ido2);
        }
    }

    createThirdExpression(variables) {
        let
                n1 = window.random.nextInt(10),
                n2;
        n2 = n1 < 5 ? n1 + 4 : n1 - 4;
        let
                ido1 = n1 < 5 ? window.CodeGenerator.IDOperator.SUFIXINCREMENT : window.CodeGenerator.IDOperator.SUFIXDECREMENT;
        let
                c1 = n1 < 5 ? window.CodeGenerator.CompareOperator.LESS : window.CodeGenerator.CompareOperator.MORE;

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tfor", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("(j="),
                window.CodeGenerator.createPart(n1),
                window.CodeGenerator.createPart("; j"),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(c1)),
                window.CodeGenerator.createPart(n2),
                window.CodeGenerator.createPart("; "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("j", ido1),
                window.CodeGenerator.createPart(")")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("printf("),
            window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", next(i)"),
                window.CodeGenerator.createPart(")"),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("}")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("int ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("next("),
                window.CodeGenerator.createPart("int ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("j)")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("{")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\treturn "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("(j="),
                window.CodeGenerator.createPart("i", variables.ido1),
                window.CodeGenerator.createPart(");")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("}")
        ));

        for (let i = 0; i < 4; i++) {
            variables.globalI = window.CodeGenerator.exeOperator(variables.globalI, variables.ido1);
            this.answers[i] = variables.globalI.toString();

        }
    }

    createReset() {
        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("int ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("reset()")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("{")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\treturn ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("i;")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("}")
        ));
    }

    createVariables() {
        return new Variables(
                window.random.key(Type),
                window.random.nextInt(9) + 1,
                window.random.nextInt(9) + 1,
                window.random.nextInt(9) + 1,
                window.random.key(window.CodeGenerator.IDOperator, 2),
                window.random.nextInt(2) == 0 ? window.CodeGenerator.IDOperator.SUFIXINCREMENT : window.CodeGenerator.IDOperator.SUFIXDECREMENT,
                window.random.key(window.CodeGenerator.Operator),
        );
    }


    createFirstsLine() {

        let variables = this.createVariables();

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("#include", window.CodeGenerator.CodeType.DIRECTIVE),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" <stdio.h>", window.CodeGenerator.CodeType.LIBRARY)
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart(" ")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("int ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" i="),
                window.CodeGenerator.createPart(variables.globalI),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart(" ")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("void", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" main()")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("{")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tauto int", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" i, j;")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("\ti = reset();")
        ));

        return variables;
    }
}

class Variables {
    type;
    i;
    j;
    globalI;
    ido1;
    ido2;
    o1;

    constructor(type, i, j, globalI, ido1, ido2, o1) {
        this.type = type;
        this.i = i;
        this.j = j;
        this.globalI = globalI;
        this.ido1 = ido1;
        this.ido2 = ido2;
        this.o1 = o1;
    }
}

let Type = {
    NEW: 1,
    LAST: 2,
    NEXT: 3,
}

window.mainController.setTask(new TemplateGenerator());