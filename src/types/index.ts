export interface Photo {
    url: string
    name?: string
    created_at: string,
    type: string
}

export interface EditorDimensions {
    oldWidth: number,
    oldHeight: number,
    newWidth: number,
    newHeight: number,
}