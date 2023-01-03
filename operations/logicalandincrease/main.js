console.log('Init task script')

class TemplateGenerator {

    lines = Array();
    answers = {};

    constructor() {
        this.createTemplate();
    }

    getName() {
        return 'Операції логіки та збільшення';
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
        let z = window.random.nextInt(10);
        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("\tint", window.CodeGenerator.CodeType.OPERATOR),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
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

        let
            i1 = window.random.nextBoolean(),
            i2 = window.random.nextBoolean(),
            i3 = window.random.nextBoolean();
        let
            l1 = window.random.key(window.CodeGenerator.LogicalOperator),
            l2 = window.random.key(window.CodeGenerator.LogicalOperator);

        /* binary table for next variable
        x==0|l1|l1==(x==0)
         0  |0 | 1
         0  |1 | 0
         1  |0 | 0
         1  |1 | 1

         this variant i want use:
         boolean x = i1?(variables.x == 0):!(variables.x==0);
         ide change to next. check binary table for test

         */
        
        let x = i1 == (variables.x == 0);
        let y = i2 == (variables.y == 0);
        let z = i3 == (variables.z == 0);

        let result = window.CodeGenerator.compare(x, y, l1);

        if(l1 == window.CodeGenerator.LogicalOperator.OR && !result) {
            result = window.CodeGenerator.compare(result, z, l2);
        }
        else if(l1 == window.CodeGenerator.LogicalOperator.AND) {
            result = window.CodeGenerator.compare(result, z, l2);
        }

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("\tprintf("),
            window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
            window.CodeGenerator.createPart(", "),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
            window.CodeGenerator.createPart(i1 ? "!x" : "x"),
            window.CodeGenerator.createPart(window.CodeGenerator.getOperator(l1)),
            window.CodeGenerator.createPart(i2 ? "!y" : "y"),
            window.CodeGenerator.createPart(window.CodeGenerator.getOperator(l2)),
            window.CodeGenerator.createPart(i3 ? "!z" : "z"),
            window.CodeGenerator.createPart(")"),
            window.CodeGenerator.createPart(";")
        ));


        this.answers[0] = result ? "1" : "0";
    }

    createSecondExpression(variables) {
        let
                o1 = window.random.key(window.CodeGenerator.Operator);
        let
                ido1 = window.random.key(window.CodeGenerator.IDOperator);
        let n1 = window.random.nextInt(9) + 1;
        variables.x = window.random.nextInt(10);
        variables.y = window.random.nextInt(10);

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tx="),
                window.CodeGenerator.createPart(variables.x),
                window.CodeGenerator.createPart("; y="),
                window.CodeGenerator.createPart(variables.y),
                window.CodeGenerator.createPart(";")
        ));

        if (ido1 == window.CodeGenerator.IDOperator.PREFIXDECREMENT || ido1 == window.CodeGenerator.IDOperator.PREFIXINCREMENT) {
            variables.x = window.CodeGenerator.exeOperator(variables.x, ido1);
            variables.z = parseInt(window.CodeGenerator.exeOperator(variables.x, n1, o1));
        } else {
            variables.z = window.CodeGenerator.exeOperator(variables.x, n1, o1);
            variables.x = parseInt(window.CodeGenerator.exeOperator(variables.x, ido1));
        }


        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tz="),
                window.CodeGenerator.createPart("x", ido1),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(window.CodeGenerator.getOperator(o1)),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(n1),
                window.CodeGenerator.createPart("; ")
               /* window.CodeGenerator.createPart("PRINT(", window.CodeGenerator.CodeType.DEFINE1),
                window.CodeGenerator.createPart("x"),
                window.CodeGenerator.createPart(")", window.CodeGenerator.CodeType.DEFINE1),*/

                /*window.CodeGenerator.createPart("PRINT(", window.CodeGenerator.CodeType.DEFINE1),
                window.CodeGenerator.createPart("z"),
                window.CodeGenerator.createPart(")", window.CodeGenerator.CodeType.DEFINE1),*/
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tprintf("),
                window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", x)"),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tprintf("),
                window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", z)"),
                window.CodeGenerator.createPart(";")
        ));

        this.answers[1] = variables.x.toString();
        this.answers[2] = variables.z.toString();
    }

    createThirdExpression(variables) {
        let
                o1 = window.random.key(window.CodeGenerator.Operator),
                o2 = window.random.key(window.CodeGenerator.Operator);
        let ido1, ido2;
        ido1 = window.random.key(window.CodeGenerator.IDOperator);
        do {
            ido2 = window.random.key(window.CodeGenerator.IDOperator);
        }
        while ((variables.y == 1 &&
                o2 == window.CodeGenerator.Operator.DIVISION &&
                ido2 == window.CodeGenerator.IDOperator.PREFIXDECREMENT) ||
                (variables.y == 0 &&
                o2 == window.CodeGenerator.Operator.DIVISION &&
                (ido2 == window.CodeGenerator.IDOperator.SUFIXDECREMENT || ido2 == window.CodeGenerator.IDOperator.SUFIXINCREMENT)));

        let n1;

        if (ido1 == window.CodeGenerator.IDOperator.PREFIXINCREMENT || ido1 == window.CodeGenerator.IDOperator.PREFIXDECREMENT) {
            variables.x = window.CodeGenerator.exeOperator(variables.x, ido1);
            if (ido2 == window.CodeGenerator.IDOperator.PREFIXDECREMENT || ido2 == window.CodeGenerator.IDOperator.PREFIXINCREMENT) {
                variables.y = window.CodeGenerator.exeOperator(variables.y, ido2);
                n1 = parseInt(window.CodeGenerator.exeOperator(variables.x, variables.y, o2));
            } else {
                n1 = parseInt(window.CodeGenerator.exeOperator(variables.x, variables.y, o2));
                variables.y = window.CodeGenerator.exeOperator(variables.y, ido2);
            }
        } else {
            if (ido2 == window.CodeGenerator.IDOperator.PREFIXDECREMENT || ido2 == window.CodeGenerator.IDOperator.PREFIXINCREMENT) {
                variables.y = window.CodeGenerator.exeOperator(variables.y, ido2);
                n1 = parseInt(window.CodeGenerator.exeOperator(variables.x, variables.y, o2));
            } else {
                n1 = parseInt(window.CodeGenerator.exeOperator(variables.x, variables.y, o2));
                variables.y = window.CodeGenerator.exeOperator(variables.y, ido2);
            }
            variables.x = window.CodeGenerator.exeOperator(variables.x, ido1);
        }

        while (n1 == 0 && o1 == window.CodeGenerator.Operator.DIVISION)
            o1 = window.random.key(window.CodeGenerator.Operator);

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tz"),
                window.CodeGenerator.createPart(window.CodeGenerator.getOperator(o1)),
                window.CodeGenerator.createPart("="),
                window.CodeGenerator.createPart("x", ido1),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(window.CodeGenerator.getOperator(o2)),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("y", ido2),
                window.CodeGenerator.createPart("; ")
                /*window.CodeGenerator.createPart("PRINT(", window.CodeGenerator.CodeType.DEFINE1),
                window.CodeGenerator.createPart("z"),
                window.CodeGenerator.createPart(")", window.CodeGenerator.CodeType.DEFINE1),*/
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tprintf("),
                window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", z)"),
                window.CodeGenerator.createPart(";")
        ));

        variables.z = parseInt(window.CodeGenerator.exeOperator(variables.z, n1, o1));

        this.answers[3] = variables.z.toString();
    }

    createFirstsLine() {
        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("#include", window.CodeGenerator.CodeType.DIRECTIVE),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" <stdio.h>", window.CodeGenerator.CodeType.LIBRARY)
        ));

        /*this.lines.push(window.HBox(
                window.CodeGenerator.createPart("#define", window.CodeGenerator.CodeType.DIRECTIVE),
                window.CodeGenerator.createPart(" PRINT(", window.CodeGenerator.CodeType.DEFINE1),
                window.CodeGenerator.createPart("int", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart(")", window.CodeGenerator.CodeType.DEFINE1),
                window.CodeGenerator.createPart(" printf("),
                window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", "),
                window.CodeGenerator.createPart("int", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart(")")
        ));*/

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