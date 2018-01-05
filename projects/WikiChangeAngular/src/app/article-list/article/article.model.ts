export class Article {
    constructor(
        public id?: string,
        public title?: string,
        public url?: string
    ) { }

    change_type: string;
    comment: string;
    revision_new: string;
    revision_old: string;
    timestamp: string;
    user: string;
}
