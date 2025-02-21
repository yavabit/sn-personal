export interface AudioObject {
	id: number;
	name: string;
	artist: string;
	album?: string;
	year?: number;
	image?: string;
	src: string;
}