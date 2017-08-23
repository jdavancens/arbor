var ProjectSchema = new mongoose.Schema({
    meta: {
        uid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'uid',
            required: true
        },
        title: String,
        subtitle: String,
        author: String,
        dateCreated: {
            type: Date,
            required: true
        },
        dateModified: {
            type: Date,
            required: true
        }
    },
    options: {
        height: {
            type: Number,
            required: true
        },
        width: {
            type: Number,
            required: true
        },
        gridSize: {
            type: Number,
            required: true
        },
        backgroundColor: String,
        zoom: {
            type: Number,
            required: true
        }
    },
    structure: {
        staffGroups: Array
    }
})

var ProjectModel = mongoose.model("Project", ProjectSchema)
module.exports = ProjectModel
