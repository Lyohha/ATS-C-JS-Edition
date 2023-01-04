console.log('Init task script')

class TemplateGenerator {

    lines = Array();
    answers = {};

    constructor() {
        this.createTemplate();
    }

    getName() {
        return 'Приведення типів (частина 1)';
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
        this.createFirstExpression(variables[0]);
        this.createSecondExpression(variables[1]);
        this.createThirdExpression(variables[2]);
        this.createFourthExpression(variables[3]);

        this.createLastLine();
    }

    createFirstExpression(variable) {
        let
                n1 = window.random.nextInt(20) + 80,
                n2 = window.random.nextInt(8) + 2;

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\ti=l=f=d="),
                window.CodeGenerator.createPart(n1),
                window.CodeGenerator.createPart("/"),
                window.CodeGenerator.createPart(n2),
                window.CodeGenerator.createPart("; "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" printf("),
                window.CodeGenerator.createPart("\"%.2g\\n\"", CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(this.toStringVar(variable)),
                window.CodeGenerator.createPart(")"),
                window.CodeGenerator.createPart(";")
        ));

        this.answers[0] = parseInt(n1 / n2).toString();
    }

    createSecondExpression(variable) {
        let
                n1 = window.random.nextInt(20) + 80,
                n2 = window.random.nextInt(8) + 2;

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\td=f=l=i="),
                window.CodeGenerator.createPart(n1),
                window.CodeGenerator.createPart("/"),
                window.CodeGenerator.createPart(n2),
                window.CodeGenerator.createPart("; "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" printf("),
                window.CodeGenerator.createPart("\"%.2g\\n\"", CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(this.toStringVar(variable)),
                window.CodeGenerator.createPart(")"),
                window.CodeGenerator.createPart(";")
        ));

        this.answers[1] = parseInt(n1 / n2).toString();
    }

    createThirdExpression(variable) {
        let
                n1 = window.random.nextInt(20) + 80,
                n2 = window.random.nextInt(8) + 2;

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\ti=l=f=d="),
                window.CodeGenerator.createPart(n1),
                window.CodeGenerator.createPart("/"),
                window.CodeGenerator.createPart(n2),
                window.CodeGenerator.createPart(".; "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" printf("),
                window.CodeGenerator.createPart("\"%.2g\\n\"", CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(this.toStringVar(variable)),
                window.CodeGenerator.createPart(")"),
                window.CodeGenerator.createPart(";")
        ));

        switch (variable) {
            case Variable.L:
            case Variable.I:
                this.answers[2] = parseInt(n1 / n2).toString();
                break;
            case Variable.F:
            case Variable.D:
                this.answers[2] = this.toStringFormat(n1 / n2);
                break;
        }

    }

    createFourthExpression(variable) {
        let
                n1 = window.random.nextInt(20) + 80,
                n2 = window.random.nextInt(8) + 2;

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\td=f=l=i=("),
                window.CodeGenerator.createPart("double", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart(")"),
                window.CodeGenerator.createPart(n1),
                window.CodeGenerator.createPart("/"),
                window.CodeGenerator.createPart(n2),
                window.CodeGenerator.createPart("; "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" printf("),
                window.CodeGenerator.createPart("\"%.2g\\n\"", CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(this.toStringVar(variable)),
                window.CodeGenerator.createPart(")"),
                window.CodeGenerator.createPart(";")
        ));

        this.answers[3] = parseInt(n1 / n2).toString();
    }

    createVariables() {

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tdouble ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("d;")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tfloat ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("f;")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tint ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("i;")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tlong ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("l;")
        ));

        let variables = Array();

        for (let i = 0; i < 4; i++) {
            variables[i] = window.random.key(Variable);
        }

        return variables;
    }

    createFirstsLine() {
        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("#include", window.CodeGenerator.CodeType.DIRECTIVE),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" <stdio.h>", window.CodeGenerator.CodeType.LIBRARY)
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
    }

    createLastLine() {
        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("}")
        ));
    }

    toStringFormat(f) {
        return f.toFixed(2).replace(',', '.');
    }

    toStringVar(variable) {
        switch (variable) {
            case Variable.D:
                return "d";
            case Variable.F:
                return "f";
            case Variable.I:
                return "i";
            case Variable.L:
                return "l";
            default:
                return "";
        }
    }
}

let Variable = {
    D: 1,
    I: 2,
    L: 3,
    F: 4,

}

window.mainController.setTask(new TemplateGenerator());