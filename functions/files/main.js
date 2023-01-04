console.log('Init task script')

class TemplateGenerator {

    lines = Array();
    answers = {};

    constructor() {
        this.createTemplate();
    }

    getName() {
        return 'Класи пам\'яті: файли';
    }

    setTemplate(pane) {
        for (let i = 0; i < this.lines.length; i++) pane.append(this.lines[i]);
    }

    getAnswers() {
        return this.answers;
    }

    createTemplate() {
        let variables = this.createFirstsLine();
        this.createMain(variables);
        this.createFile1(variables);
        this.createFile2();
        this.setAnswers(variables);
    }

    setAnswers(variables) {
        this.answers[0] = variables.globalI.toString();
        this.answers[1] = (variables.staticI += variables.n1).toString();
        this.answers[2] = (variables.staticI -= variables.n2).toString();
        this.answers[3] = CodeGenerator.exeOperator(variables.staticJ, variables.globalI + variables.j, variables.o1).toString();
    }

    createMain(variables) {
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

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tj="),
                window.CodeGenerator.createPart(variables.j),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("printf("),
            window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", i"),
                window.CodeGenerator.createPart(")"),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("printf("),
            window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", next()"),
                window.CodeGenerator.createPart(")"),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("printf("),
            window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", last()"),
                window.CodeGenerator.createPart(")"),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
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

    }

    createFile1(variables) {
        this.lines.push(window.HBox(
                window.CodeGenerator.createPart(" ")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("//file1.h", window.CodeGenerator.CodeType.COMMENT)
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("static int", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" i="),
                window.CodeGenerator.createPart(variables.staticI),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart(" ")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("int ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("next()")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("{")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\treturn ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("(i+="),
                window.CodeGenerator.createPart(variables.n1),
                window.CodeGenerator.createPart(");")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("}")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart(" ")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("int ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("last()")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("{")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\treturn ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("(i-="),
                window.CodeGenerator.createPart(variables.n2),
                window.CodeGenerator.createPart(");")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("}")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart(" ")
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
                window.CodeGenerator.createPart("\tstatic int ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("j="),
                window.CodeGenerator.createPart(variables.staticJ),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\treturn ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("(i=j"),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(variables.o1)),
                window.CodeGenerator.createPart("=i);")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("}")
        ));
    }

    createFile2() {
        this.lines.push(window.HBox(
                window.CodeGenerator.createPart(" ")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("//file2.h", window.CodeGenerator.CodeType.COMMENT)
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("extern int", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" i;")
        ));

        this.lines.push(window.HBox(
                window.CodeGenerator.createPart(" ")
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
                random.nextInt(9) + 1,
                random.nextInt(9) + 1,
                random.nextInt(9) + 1,
                random.nextInt(9) + 1,
                random.nextInt(9) + 1,
                window.random.key(window.CodeGenerator.Operator),
                random.nextInt(9) + 1
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

        return variables;
    }
}

class Variables {
    globalI;
    staticI;
    staticJ;
    n1;
    n2;
    o1;
    j;


    constructor(globalI, staticI, staticJ, n1, n2, o1, j) {
        this.globalI = globalI;
        this.staticI = staticI;
        this.staticJ = staticJ;
        this.n1 = n1;
        this.n2 = n2;
        this.o1 = o1;
        this.j = j;
    }
}

window.mainController.setTask(new TemplateGenerator());