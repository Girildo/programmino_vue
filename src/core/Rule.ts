import { Comment } from "@/core/Comment";

abstract class LocalRule {
    public abstract Check(input: Comment): boolean;
}

export class RegexRule extends LocalRule {

    private Pattern: RegExp;

    constructor(pattern: RegExp) {
        super();
        this.Pattern = pattern;
    }


    public Check(input: Comment): boolean {
        return this.Pattern.test(input.Text);
    }
}