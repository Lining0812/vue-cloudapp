export const Album_Fields = {
    Title: {
        id: 'title',
        label: '专辑名称',
        type: 'text',
        name: 'title',
        placeholder: '专辑名称',
        required: true,
        apiField: 'Title'
    },
    Artist: {
        id: 'artist',
        label: '艺术家',
        type: 'text',
        name: 'artist',
        placeholder: '艺术家',
        required: true,
        apiField: 'Artist'
    },
    ReleaseDate: {
        id: 'releaseDate',
        label: '发行时间',
        type: 'date',
        name: 'releaseDate',
        placeholder: '发行时间',
        required: true,
        apiField: 'ReleaseDate'
    },
    Description: {
        id: 'description',
        label: '专辑描述',
        type: 'text',
        name: 'description',
        placeholder: '请输入专辑描述（可选）',
        required: false,
        apiField: 'Description'
    },
    CoverImage: {
        id: 'coverImage',
        label: '封面图片',
        type: 'file',
        name: 'coverImage',
        placeholder: '请选择封面图片',
        required: false,
        accept: 'image/jpeg, image/png, image/gif',
        apiField: 'CoverImage'
    }
}
