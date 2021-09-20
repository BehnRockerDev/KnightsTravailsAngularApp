import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"

@Injectable()
export class KnightMovesService {
    constructor(private httpClient: HttpClient) { }
    
    getMoveList() {
        var results = this.httpClient.get<string[]>("http://localhost:44328/api/chess/getshortestpath/A8/B7");
        return results;
    }
}