import Character from "./character";

export default interface RMResponse {
    info: Info,
    results: Character[];
}

export interface Info {
    next?: string;
    prev?: string;
}