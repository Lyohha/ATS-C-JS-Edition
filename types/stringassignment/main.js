console.log('Init task script')

class TemplateGenerator {

    lines = Array();
    answers = {};

    constructor() {
        this.createTemplate();
    }

    getName() {
        return 'Функції strcat, strcmp';
    }

    setTemplate(pane) {
        for (let i = 0; i < this.lines.length; i++) pane.append(this.lines[i]);
    }

    getAnswers() {
        return this.answers;
    }

    createTemplate() {
        let variables = new Variables();

        this.createFirstsLine();
        this.createFirstExpression(variables);
        this.createSecondExpression(variables);
        this.createThirdExpression(variables);
        this.createFourthExpression(variables);
        this.createLastLine();
    }

    createFirstExpression(variables) {
        variables.S = this.createString();

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tstrcpy(S, "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(variables.S, window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart("\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(");")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tprintf("),
                window.CodeGenerator.createPart("\"%s\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", S);")
        ));

        this.answers[0] = variables.S;
    }

    createSecondExpression(variables) {
        variables.T = this.createString();

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tstrcpy(T, "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(variables.T, window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart("\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(");")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tstrcat(S, T);")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tprintf("),
                window.CodeGenerator.createPart("\"%s\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", S);")
        ));

        variables.S = variables.S + variables.T;
        this.answers[1] = variables.S;
    }

    createThirdExpression(variables) {
        let
                c1 = window.random.key(window.CodeGenerator.CompareOperator);
        variables.L = this.createString();

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tstrcpy(L, "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(variables.L, window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart("\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(");")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tP=strcmp(S, L) "),
                window.CodeGenerator.createPart(CodeGenerator.getOperator(c1)),
                window.CodeGenerator.createPart(" "),
                window.CodeGenerator.createPart(0),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tprintf("),
                window.CodeGenerator.createPart("\"%d\\n\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(", P);")
        ));

        this.answers[2] = CodeGenerator.compare(this.stringCompare(variables.S, variables.L), 0, c1).toString();
    }

    createFourthExpression(variables) {
        let
                n1 = random.nextInt(variables.S.length);

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tputchar(S["),
                window.CodeGenerator.createPart(n1),
                window.CodeGenerator.createPart("]);")
        ));

        this.answers[3] = "" + variables.S.charAt(n1);
    }

    stringCompare(str1, str2) {

        // if (str1.length != str2.length) {
        //     if (str1.length > str2.length)
        //         return str1[str2.length];
        //     else
        //         return '\0' - str2[str1.length()];
        // }

        // for (let i = 0; i < str1.length && i < str2.length; i++) {
        //     if (str1[i] != str2[i])
        //         return str1[i] - str2[i];
        // }



        // return 0;

        return ( ( str1 == str2 ) ? 0 : ( ( str1 > str2 ) ? 1 : -1 ) );
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

        this. createVariables();
    }

    createLastLine() {
        this.lines.push(window.HBox(
                window.CodeGenerator.createPart("}")
        ));
    }

    createVariables() {
        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tchar ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("S["),
                window.CodeGenerator.createPart(20),
                window.CodeGenerator.createPart("], T["),
                window.CodeGenerator.createPart(20),
                window.CodeGenerator.createPart("], L["),
                window.CodeGenerator.createPart(20),
                window.CodeGenerator.createPart("];")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tint ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("P;")
        ));
    }

    createString() {
        let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        let
                size = random.nextInt(9) + 1;
        let
                builder = '';

        for (let i = 0; i < size; i++)
            builder += alphabet[window.random.nextInt(alphabet.length)];

        return builder;
    }
}

class Variables {
    S;
    T;
    L;

    constructor(S, T, L) {
        this.S = S;
        this.T = T;
        this.L = L;
    }
}


window.mainController.setTask(new TemplateGenerator());