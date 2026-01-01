export const Concert_Fields = {
    Title: {
        id: 'title',
        label: '演唱会名称',
        type: 'text',
        name: 'title',
        placeholder: '演唱会名称',
        required: true,
        apiField: 'Title'
    },
    Description: {
        id: 'description',
        label: '演唱会描述',
        type: 'text',
        name: 'description',
        placeholder: '请输入演唱会描述（可选）',
        required: false,
        apiField: 'Description'
    },
    StartAt: {
        id: 'startat',
        label: '开始时间',
        type: 'date',
        name: 'startat',
        placeholder: '开始时间',
        required: true,
        apiField: 'StartAt'
    },
    EndAt: {
        id: 'endat',
        label: '结束时间',
        type: 'date',
        name: 'endat',
        placeholder: '结束时间',
        required: true,
        apiField: 'EndAt'
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
    },
    Address: {
        id: 'Address',
        label: '地址',
        type: 'text',
        name: 'address',
        placeholder: '地址',
        required: true,
        apiField: 'Address'
    },
}