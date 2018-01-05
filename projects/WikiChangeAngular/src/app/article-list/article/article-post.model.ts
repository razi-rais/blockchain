import { Article } from './article.model';

export class ArticlePost {
    constructor(
        public UserId: string,
        public Articles: Article[]
    ) { }
}
