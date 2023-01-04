console.log('Init task script')

class TemplateGenerator {

    lines = Array();
    answers = {};

    constructor() {
        this.createTemplate();
    }

    getName() {
        return 'Приведення типів (частина 2)';
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

    createFirstExpression(variables) {
        let
                o1 = window.random.nextInt(2) == 0 ? window.CodeGenerator.Operator.MULTIPLICATION : window.CodeGenerator.Operator.DIVISION,
                o2 = window.random.nextInt(2) == 0 ? window.CodeGenerator.Operator.MULTIPLICATION : window.CodeGenerator.Operator.DIVISION;
        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tx=(y=d"),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(o1)),
                window.CodeGenerator.createPart("i)"),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(o2)),
                window.CodeGenerator.createPart(2),
                window.CodeGenerator.createPart("; "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("printf("),
                window.CodeGenerator.createPart("\"%g\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(this.toStringVar(variables.variables[0])),
                window.CodeGenerator.createPart(")"),
                window.CodeGenerator.createPart(";")
        ));

        if (variables.variables[0] == Variable.X)
            this.answers[0] = parseInt(CodeGenerator.exeOperator( parseInt(window.CodeGenerator.exeOperator(variables.d, 2, o1)), 2, o2)).toString();
        else
            this.answers[0] = parseInt(window.CodeGenerator.exeOperator(variables.d, 2, o1)).toString( );
    }

    createSecondExpression(variables) {
        let
                o1 = window.random.nextInt(2) == 0 ? window.CodeGenerator.Operator.MULTIPLICATION : window.CodeGenerator.Operator.DIVISION,
                o2 = window.random.nextInt(2) == 0 ? window.CodeGenerator.Operator.MULTIPLICATION : window.CodeGenerator.Operator.DIVISION;
        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\ty=(x=d"),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(o1)),
                window.CodeGenerator.createPart("i)"),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(o2)),
                window.CodeGenerator.createPart(2),
                window.CodeGenerator.createPart("; "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("printf("),
                window.CodeGenerator.createPart("\"%g\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(this.toStringVar(variables.variables[1])),
                window.CodeGenerator.createPart(")"),
                window.CodeGenerator.createPart(";")
        ));

        if (variables.variables[1] == Variable.X)
            this.answers[1] = this.toStringFormat(CodeGenerator.exeOperator(variables.d, 2, o1));
        else
            this.answers[1] = parseInt(window.CodeGenerator.exeOperator(CodeGenerator.exeOperator(variables.d, 2, o1), 2, o2)).toString();
    }

    createThirdExpression(variables) {
        let
                i1 = window.random.nextInt(9 - variables.i) + variables.i + 1,
                f1 = window.random.nextInt(9) + 1;

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\ty=d*(x="),
                window.CodeGenerator.createPart(this.toDouble(i1, f1)),
                window.CodeGenerator.createPart("/d); "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("printf("),
                window.CodeGenerator.createPart("\"%g\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("y"),
                window.CodeGenerator.createPart(")"),
                window.CodeGenerator.createPart(";")
        ));

        this.answers[2] = i1.toString();
    }

    createFourthExpression(variables) {
        let
                o1 = window.random.key(window.CodeGenerator.Operator);
        let i1, i2, f1, f2;
        if (o1 == window.CodeGenerator.Operator.ADDITION) {
            i1 = window.random.nextInt(variables.i);
            f1 = window.random.nextInt(10);
            i2 = variables.i - i1;
            f2 = variables.f;
        } else {
            i1 = window.random.nextInt(9 - variables.i) + variables.i + 1;
            f1 = window.random.nextInt(10);
            i2 = i1 - variables.i + 1;
            f2 = window.random.nextInt(10);
        }

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tx=d*(y=(("),
                window.CodeGenerator.createPart("int", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart(")"),
                window.CodeGenerator.createPart(this.toDouble(i1, f1)),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(o1)),
                window.CodeGenerator.createPart(this.toDouble(i2, f2)),
                window.CodeGenerator.createPart(")/d); "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("printf("),
                window.CodeGenerator.createPart("\"%g\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(this.toStringVar(variables.variables[3])),
                window.CodeGenerator.createPart(")"),
                window.CodeGenerator.createPart(";")
        ));

        if (o1 == window.CodeGenerator.Operator.ADDITION) {
            if (variables.variables[3] == Variable.X)
                this.answers[3] = this.toStringFormat(variables.d);
            else
                this.answers[3] = "1";
        } else {
            this.answers[3] = "0";
        }
    }

    createVariables() {

        let variables = Array();

        for (let i = 0; i < 4; i++) {
            variables[i] = window.random.key(Variable);
        }
        let v = new Variables(variables, window.random.nextInt(5) + 1, window.random.nextInt(10));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tdouble ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("d="),
                window.CodeGenerator.createPart(v.d),
                window.CodeGenerator.createPart(", x;")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tint ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("i="),
                window.CodeGenerator.createPart(2),
                window.CodeGenerator.createPart(", y;")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart(" ")
        ));

        return v;
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

    toDouble(n1, n2) {
        return n1 + n2 / 10;
    }

    toStringFormat(f) {
        return f.toFixed(2).replace(',', '.');
    }

    toStringVar(variable) {
        switch (variable) {
            case Variable.X:
                return "x";
            case Variable.Y:
                return "y";
            default:
                return "";
        }
    }
}

class Variables {
    variables;
    i;
    f;
    d;

    constructor(variables, i, f) {
        this.variables = variables;
        this.i = i;
        this.f = f;
        this.d = i + f / 10;
    }
}

let Variable = {
    X: 1,
    Y: 2,

}

window.mainController.setTask(new TemplateGenerator());