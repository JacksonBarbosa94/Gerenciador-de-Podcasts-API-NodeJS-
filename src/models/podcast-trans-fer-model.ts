import { podcastModel } from "./podcastModel";

export interface PodcastTransferModel {
    statusCode: number;
    body: podcastModel[];
}