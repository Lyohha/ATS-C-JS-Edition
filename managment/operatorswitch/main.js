console.log('Init task script')

class TemplateGenerator {

    lines = Array();
    answers = {};

    constructor() {
        this.createTemplate();
    }

    getName() {
        return 'Оператор switch';
    }

    setTemplate(pane) {
        for (let i = 0; i < this.lines.length; i++) pane.append(this.lines[i]);
    }

    getAnswers() {
        return this.answers;
    }

    createTemplate() {
        this.createFirstsLine();
        let text = this.createVariables();
        this.createFirstExpression(text);
        this.createLastLine();
    }

    createVariables() {

        let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

        // char[] t = new char[]{
        //         (char) (random.nextInt(7) > 1 ? 'a' + random.nextInt(26) : '0' + random.nextInt(10)),
        //         (char) (random.nextInt(7) > 1 ? 'a' + random.nextInt(26) : '0' + random.nextInt(10)),
        //         (char) (random.nextInt(7) > 1 ? 'a' + random.nextInt(26) : '0' + random.nextInt(10)),
        //         (char) (random.nextInt(7) > 1 ? 'a' + random.nextInt(26) : '0' + random.nextInt(10)),
        //         (char) (random.nextInt(7) > 1 ? 'a' + random.nextInt(26) : '0' + random.nextInt(10)),
        //         (char) (random.nextInt(7) > 1 ? 'a' + random.nextInt(26) : '0' + random.nextInt(10)),
        //         (char) (random.nextInt(7) > 1 ? 'a' + random.nextInt(26) : '0' + random.nextInt(10))
        // };
        // String text = new String(t);

        let t = [
            window.random.nextInt(7) > 1 ? alphabet[window.random.nextInt(alphabet.length)] : window.random.nextInt(9).toString(),
            window.random.nextInt(7) > 1 ? alphabet[window.random.nextInt(alphabet.length)] : window.random.nextInt(9).toString(),
            window.random.nextInt(7) > 1 ? alphabet[window.random.nextInt(alphabet.length)] : window.random.nextInt(9).toString(),
            window.random.nextInt(7) > 1 ? alphabet[window.random.nextInt(alphabet.length)] : window.random.nextInt(9).toString(),
            window.random.nextInt(7) > 1 ? alphabet[window.random.nextInt(alphabet.length)] : window.random.nextInt(9).toString(),
            window.random.nextInt(7) > 1 ? alphabet[window.random.nextInt(alphabet.length)] : window.random.nextInt(9).toString(),
            window.random.nextInt(7) > 1 ? alphabet[window.random.nextInt(alphabet.length)] : window.random.nextInt(9).toString(),
        ];

        let text = t.join('');

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tchar", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("* input = "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(text, window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart("\"", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tint ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("i;")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tchar ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("c;")
        ));

        return text;
    }

    createFirstExpression(text) {

        let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

        let
                c1 = text.charAt(random.nextInt(text.length)),
                c2 = window.random.nextInt(2) == 1 ? alphabet[window.random.nextInt(alphabet.length)] : window.random.nextInt(9).toString(),
                c3 = window.random.nextInt(2) == 1 ? alphabet[window.random.nextInt(alphabet.length)] : window.random.nextInt(9).toString(),
                c4 = window.random.nextInt(2) == 1 ? alphabet[window.random.nextInt(alphabet.length)] : window.random.nextInt(9).toString(),
                c5 = window.random.nextInt(2) == 1 ? alphabet[window.random.nextInt(alphabet.length)] : window.random.nextInt(9).toString();

        while(c2 == c3) c3 = window.random.nextInt(2) == 1 ? alphabet[window.random.nextInt(alphabet.length)] : window.random.nextInt(9).toString();

        while (c5 == c2 || c5 == c4) c5 = window.random.nextInt(2) == 1 ? alphabet[window.random.nextInt(alphabet.length)] : window.random.nextInt(9).toString();


        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tfor", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("(i=0; (c=input[i]) != "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("\'\\0\'", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart("; i++)")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\t{")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\t\tswitch", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("(c)")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\t\t{")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\t\t\tcase ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("\'", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(""+c1, window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart("\'", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(": putchar("),
                window.CodeGenerator.createPart("\'", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(""+c2, window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart("\'", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(");"),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" continue", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\t\t\tcase ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("\'", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(""+c3, window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart("\'", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(": putchar("),
                window.CodeGenerator.createPart("\'", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(""+c4, window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart("\'", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(");"),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" continue", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\t\t\tcase ", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart("\'", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(""+c5, window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart("\'", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(": "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" continue", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart(";")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\t\t\tdefault", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart(": putchar(c); "),
                window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.SPACE),
                window.CodeGenerator.createPart(" continue", window.CodeGenerator.CodeType.OPERATOR),
                window.CodeGenerator.createPart(";")
        ));


        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\t\t}")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\t}")
        ));

        this.lines.push(window.HBox(
            window.CodeGenerator.createPart("", window.CodeGenerator.CodeType.TAB),
                window.CodeGenerator.createPart("\tputchar("),
                window.CodeGenerator.createPart("\'\\n\'", window.CodeGenerator.CodeType.STRING),
                window.CodeGenerator.createPart(");")
        ));


        this.answers[0] = text.replace(c1, c2).replace(c3, c4).replace("" + c5, "");

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