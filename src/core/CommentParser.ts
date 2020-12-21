import { RegexRule } from "@/core/Rule";
import { FlickrApiDefinitions } from '@/FlickrApiDefinitions';
import Rules from "@/assets/rules.json";


function Normalize(input: string) {
    return input.toUpperCase();//.replaceAll('\r', '').replaceAll('\n', '').replaceAll(' ', ''));
}

export function ParseComment(jsonResponse: FlickrApiDefinitions["Topic"]) : Comment {

    text = Normalize(text);
    // const EntryRule = new RegexRule("//")


    let entryPattern = "";

    for (const entry of Rules.Entries) {
        entryPattern += (`(${entry.ID.trim()}#(\\d+))`)
    }

    console.log(entryPattern);

    const EntryRule = new RegExp(Rules.EntryRegex);
    const StopVotingRule = new RegExp(Rules.StopVotingRegex);
    const VotesRule = new RegExp(entryPattern);

    

    }
}


