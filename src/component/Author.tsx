import type { AuthorType } from "../types/AuthorType";

export function Author({Name, Surname} : AuthorType) {
    return<div>Author {Name} {Surname}</div>
}