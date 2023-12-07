const express = require("express");
require("dotenv").config();

const router = express.Router();

// Domain Model
const Domain = require("../../models/Domain");

// @route   GET api/domains
// @desc    Get Domains
// @access  Public
router.get("/", (req, res) => {
	Domain.find({})
		.then(domain => res.json(domain))
		.catch(err => res.status(404).json({ message: "Something went wrong." }));
});

// @route   POST api/domains
// @desc    Add new Domain
// @access  Public
router.post("/", (req, res) => {
	const { title, imgSrc, description } = req.body;

	// Simple Validation
	if (!title || !imgSrc || !description) {
		return res.status(400).json({ message: "All fields are mandatory." });
	}

	const newDomain = new Domain({ title, imgSrc, description });
	newDomain
		.save()
		.then(domain => res.json(domain))
		.catch(err => res.status(404).json({ message: "Something went wrong." }));
});

// @route   PATCH api/domains/:id
// @desc    Edit a domain
// @access  Public
router.patch("/:id", (req, res) => {
	const { title, imgSrc, description } = req.body;

	// Simple Validation
	if (!title || !imgSrc || !description) {
		return res.status(400).json({ message: "All fields are mandatory." });
	}

	Domain.findByIdAndUpdate(
		req.params.id,
		{
			title,
			imgSrc,
			description,
		},
		{ new: true }
	)
		.then(domain => res.json(domain))
		.catch(err => res.status(404).json({ message: "Something went wrong." }));
});

// @route   DELETE api/domains/:id
// @desc    Delete a Domain
// @access  Public
router.delete("/:id", (req, res) => {
	Domain.findByIdAndDelete(req.params.id)
		.then(domain => res.json({ message: "Domain was deleted successfully." }))
		.catch(err => res.status(404).json({ message: "Something went wrong." }));
});

module.exports = router;
