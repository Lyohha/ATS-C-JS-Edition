console.log('Init task script')

let TemplateGenerator = {

    lines: Array(),
    answers: {},

    getName() {
        return 'Операції присвоювання';
    },

    TemplateGenerator() {
        this.createTemplate();
    },

    setTemplate(pane) {
        for (let i = 0; i < TemplateGenerator.lines.length; i++) pane.append(TemplateGenerator.lines[i]);
    },

    getAnswers() {
        return this.answers;
    },

    createTemplate() {
        this.createFirstsLine();
        let x = this.createVariables();
        x = this.createFirstExpression(x);
        this.createSecondExpression(x);
        x = this.createThirdExpression(x);
        this.createFourthExpression(x);
        this.createLastLine();
    },

    createVariables() {
        let x = window.random.nextInt(10);
        TemplateGenerator.lines.push(window.HBox(
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("int", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" x="),
                window.CodeGenerator.createPart(x),
                window.CodeGenerator.createPart(", y, z;")
        ));

        return x;
    },

    createFirstExpression(x) {
        let n1, n2, n3;
        let o1, o2, o3;

        let a, b;

        do {
            n1 = window.random.nextInt(9) + 1;
            n2 = window.random.nextInt(9) + 1;
            n3 = window.random.nextInt(9) + 1;

            o1 = window.random.key(window.CodeGenerator.Operator);
            o2 = window.random.key(window.CodeGenerator.Operator);
            o3 = window.random.key(window.CodeGenerator.Operator);

            if ((o3 == window.CodeGenerator.Operator.MULTIPLICATION || o3 == window.CodeGenerator.Operator.DIVISION) &&
                    !(o2 == window.CodeGenerator.Operator.MULTIPLICATION || o2 == window.CodeGenerator.Operator.DIVISION)) {
                a = window.CodeGenerator.exeOperator(n2, n3, o3, true);
                b = window.CodeGenerator.exeOperator(n1, a, o2, true);
            } else {
                a = window.CodeGenerator.exeOperator(n1, n2, o2, true);
                b = window.CodeGenerator.exeOperator(a, n3, o3, true);
            }
            if (b == 0 && o1 == window.CodeGenerator.Operator.DIVISION)
                continue;
            break;
        }
        while (true);

        TemplateGenerator.lines.push(window.HBox(
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tx"),
                window.CodeGenerator.createPart(window.CodeGenerator.getOperator(o1)),
                window.CodeGenerator.createPart("="),
                window.CodeGenerator.createPart(n1),
                window.CodeGenerator.createPart(window.CodeGenerator.getOperator(o2)),
                window.CodeGenerator.createPart(n2),
                window.CodeGenerator.createPart(window.CodeGenerator.getOperator(o3)),
                window.CodeGenerator.createPart(n3),
                window.CodeGenerator.createPart("; "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
               // window.CodeGenerator.createPart("PRINTX", window.CodeGenerator.CodeType.DEFINE1),
                window.CodeGenerator.createPart(" printf("),
                window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", x)"),
                window.CodeGenerator.createPart(";")
        ));


        x = window.CodeGenerator.exeOperator(x, b, o1, true);
        this.answers[0] = parseInt(x);
        return x;
    },

    createSecondExpression(x) {
        let n1 = window.random.nextInt(9) + 1;
        window.CodeGenerator.Operator
                o1 = window.random.key(window.CodeGenerator.Operator);

        TemplateGenerator.lines.push(window.HBox(
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),    
                window.CodeGenerator.createPart("\tx"),
                window.CodeGenerator.createPart(window.CodeGenerator.getOperator(o1)),
                window.CodeGenerator.createPart("=y=z="),
                window.CodeGenerator.createPart(n1),
                window.CodeGenerator.createPart("; "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                //window.CodeGenerator.createPart("PRINTX", window.CodeGenerator.CodeType.DEFINE1),
                window.CodeGenerator.createPart(" printf("),
                window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", x)"),
                window.CodeGenerator.createPart(";")
        ));

        x = window.CodeGenerator.exeOperator(x, n1, o1, true);

        this.answers[1] = parseInt(x);
    },

    createThirdExpression(x) {
        let n1 = window.random.nextInt(100),
                n2 = window.random.nextInt(100);

        let
                o1 = window.random.key(window.CodeGenerator.CompareOperator);

        TemplateGenerator.lines.push(window.HBox(
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tx="),
                window.CodeGenerator.createPart(n1),
                window.CodeGenerator.createPart(window.CodeGenerator.getOperator(o1)),
                window.CodeGenerator.createPart(n2),
                window.CodeGenerator.createPart("; "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                //window.CodeGenerator.createPart("PRINTX", window.CodeGenerator.CodeType.DEFINE1),
                window.CodeGenerator.createPart(" printf("),
                window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", x)"),
                window.CodeGenerator.createPart(";")
        ));

        x = window.CodeGenerator.compare(n1, n2, o1);
        this.answers[2] = parseInt(x);
        return x;
    },

    createFourthExpression(x) {
        let
                n1 = window.random.nextInt(100);
        let
                o1 = window.random.key(window.CodeGenerator.CompareOperator);

        TemplateGenerator.lines.push(window.HBox(
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tx"),
                window.CodeGenerator.createPart(window.CodeGenerator.getOperator(o1)),
                window.CodeGenerator.createPart("(y="),
                window.CodeGenerator.createPart(n1),
                window.CodeGenerator.createPart("); "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                //window.CodeGenerator.createPart("PRINTX", window.CodeGenerator.CodeType.DEFINE1),
                window.CodeGenerator.createPart(" printf("),
                window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", x)"),
                window.CodeGenerator.createPart(";")
        ));

        this.answers[3] = parseInt(x);
    },

    createFirstsLine() {
        TemplateGenerator.lines.push(window.HBox(
                window.CodeGenerator.createPart("#include", window.CodeGenerator.CodeType.DIRECTIVE),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" <stdio.h>", window.CodeGenerator.CodeType.LIBRARY)
        ));

        /*TemplateGenerator.lines.push(window.HBox(
                window.CodeGenerator.createPart("#define", window.CodeGenerator.CodeType.DIRECTIVE),
                window.CodeGenerator.createPart(" PRINTX", window.CodeGenerator.CodeType.DEFINE1),
                window.CodeGenerator.createPart(" printf("),
                window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", x)")
        ));*/

        TemplateGenerator.lines.push(window.HBox(
                window.CodeGenerator.createPart(" ")
        ));

        TemplateGenerator.lines.push(window.HBox(
                window.CodeGenerator.createPart("void", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" main()")
        ));

        TemplateGenerator.lines.push(window.HBox(
                window.CodeGenerator.createPart("{")
        ));
    },

    createLastLine() {
        TemplateGenerator.lines.push(window.HBox(
                window.CodeGenerator.createPart("}")
        ));
    },


}

TemplateGenerator.TemplateGenerator();

window.mainController.setTask(TemplateGenerator);