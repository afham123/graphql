import mongoose from 'mongoose';

const ObjectId = (id) => {
    try {
        return new mongoose.Types.ObjectId(id);
    } catch (e) {
        return false;
    }
};

const find = async (collections, options) =>
    collections
        .find(options?.query || {})
        .select(options?.select)
        .populate(options?.populate)
        .sort(options?.sort)
        .skip(options?.offset)
        .limit(options?.limit)
        .lean(options?.lean || true);

const findById = async (collections, options) =>
    collections
        .findById(options?.query || {})
        .select(options?.select)
        .populate(options?.populate)
        .lean(options?.lean || true);

const findOne = async (collections, options) =>
    collections
        .findOne(options?.query || {})
        .select(options?.select)
        .populate(options?.populate)
        .sort(options?.sort)
        .lean(options?.lean ?? true);

const create = async (collections, options) =>
    collections.create(options?.insert);

const countDocuments = async (collections, options) =>
    collections.countDocuments(options.query).exec();

const softDeleteOne = async (collections, options) => {
    const doc = await findOne(collections, options);
    doc.deletedBy = options.deletedBy;
    doc.deleted = true;
    return doc.save();
};

const deleteOne = async (collections, options) =>
    collections.deleteOne(options.query).exec();

const findOneAndUpdate = async (collections, options) =>
    collections.findOneAndUpdate(
        options.query,
        options.updateData,
        options.updateOptions || { new: true }
    );

const deleteMany = async (collections, options) =>
    collections.deleteMany(options.query || {});

const findByIdAndDelete = async (collections, options) =>
    collections.findByIdAndDelete(options.query);

const aggregate = async (collections, aggregateQuery) =>
    collections.aggregate(aggregateQuery);

const updateMany = async (collection, options) =>
    collection.updateMany(
        options.query,
        options.updateData,
        options.updateOptions || { new: true }
    )


export const MongoService = {
    ObjectId,
    find,
    findById,
    findOne,
    create,
    countDocuments,
    softDeleteOne,
    deleteOne,
    findOneAndUpdate,
    deleteMany,
    findByIdAndDelete,
    aggregate,
    updateMany
};