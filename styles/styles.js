import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	modalSubtitle: {
		fontSize: "14px !important",
		paddingTop: "10px !important",
		fontWeight: "600 !important",
	},
	modalStyle: {
		"& .profile-header-section": {
			paddingTop: "36px !important",
			"@media screen and (max-width: 765px)": {
				padding: "0px !important",
			},
		},
		"& .profile-sections": {
			padding: "0px 31.2px 10px 32px !important",
			"@media screen and (max-width: 765px)": {
				padding: "0px !important",
			},
			"& .close-btn-container": {
				display: "flex !important",
				justifyContent: "flex-end !important",
				alignItems: "center !important",
				"@media screen and (min-width: 767px)": {
					margin: "0px 8px !important",
				},
				"@media screen and (max-width: 500px)": {
					margin: "8px 8px !important",
				},
				"& button": {
					display: "flex !important",
				},
			},
		},
		paddingLeft: "0 !important",
		"& .cover-photo-style": {
			border: "1px solid #ffffff",
			borderRadius: "8px",
			height: "300px !important",
			"@media screen and (max-width: 765px)": {
				height: "100% !important",
			},
		},
		"& .button-container": {
			paddingTop: "0px !important",
		},
		"& .divider-style": {
			width: "100% !important",
			marginBottom: "15px !important",
			marginTop: "15px !important",
			height: "3px !important",
			opacity: "0.5 !important",
		},
		"& .featured-input": {
			display: "none",
		},
		"& .helper-text-featured": {
			color: "#6d7278 !important",
			fontSize: "14px !important",
		},
		"& .divider-style-section": {
			width: "100% !important",
			marginBottom: "15px !important",
			marginTop: "15px !important",
			height: "1px !important",
			opacity: "0.5 !important",
		},
		"& .upload-buttons-container": {
			paddingTop: "28px !important",
			"& .hide-upload-input": {
				display: "none !important",
			},
		},
		"& .hide-upload-input": {
			display: "none !important",
		},
		"& .featured-input-button": {
			height: "40px !important",
			fontSize: "14px !important",
			color: "#32393d !important",
			backgroundColor: "#e1e4e6 !important",
		},
		"& .add-more": {
			color: "#269cd2 !important",
			fontWeight: "700 !important",
			cursor: "pointer !important",
			"&:focus": {
				outline: "none !important",
				border: "0px !important",
			},
		},
		"& .upload-file-caption": {
			color: "#6d7278 !important",
			marginTop: "5px",
		},
		"& .modal-backdrop": {
			zIndex: theme.zIndex.modal + 1,
			color: "#fff",
		},
		"& .video-upload-loader-section": {
			height: "208px !important",
		},
		"& .video-viewer-title": {
			fontSize: "14px",
			fontWeight: "bold",
		},
		"& .video-border": {
			border: "1px solid #fff",
			outline: "none"
		},
		"& .video-title-textbox": {
			"& .option-label": {
				fontWeight: 400,
				fontSize: "14px",
			},
		},
		"& .error": {
			borderColor: `${theme.palette.error.main} !important`,
		},
		"& .error-label": {
			color: `${theme.palette.error.main}  !important`,
		},
		"& .grid-list": {
			width: "100% !important",
			"& .photos-sortable-grid": {
				width: "100% !important",
			},
			"& .image-grid-item": {
				width: "23% !important",
				border: "1px solid rgba(0, 0, 0, 0.12) !important",
				margin: "8px !important",
				height: "152px !important",
				cursor: "move !important",
				"& .image-grid-item-button": {
					width: "100% !important",
					height: "100% !important",
					"& .grid-item-root": {
						background: "none !important",
					},
					"& .grid-item-action-bar": {
						width: "100% !important",
					},
				},
				"@media screen and (min-width: 765px) and (max-width: 959px)": {
					width: "30% !important",
				},
				"@media screen and (min-width: 500px) and (max-width: 765px)": {
					width: "30% !important",
				},
				"@media screen and (max-width: 500px)": {
					width: "44% !important",
				},
				"@media screen and (max-width: 300px)": {
					width: "96% !important",
				},
			},
		},
		"& .featured-grid-list": {
			width: "100% !important",
			"& .featured-sortable-grid": {
				width: "100% !important",
				display: "contents !important",
				listStyle: "none !important",
			},
			"& .featured-grid-item": {
				width: "23% !important",
				maxWidth: "210px !important",
				border: "1px solid rgba(0, 0, 0, 0.12) !important",
				margin: "8px !important",
				height: "160px !important",
				padding: "0px !important",
				"& .featured-link": {
					"&:hover": {
						textDecoration: "none !important",
					},
					"& .no-link-icon": {
						fontSize: "90px !important",
					},
					"& .featured-box-image": {
						objectFit: "contain !important",
					},
				},
				"& .featured-no-link": {
					width: "100% !important",
					cursor: "auto !important",
					textAlign: "start !important",
					"&:hover": {
						textDecoration: "none !important",
					},
					"& .no-link-icon": {
						fontSize: "90px !important",
					},
				},
				"& .featured-text-margin": {
					marginLeft: "1px !important",
				},
				"& .grid-item-root": {
					background: "none !important",
				},
				"& .grid-item-action-bar": {
					width: "100% !important",
				},
				"@media screen and (min-width: 765px) and (max-width: 959px)": {
					width: "30% !important",
				},
				"@media screen and (min-width: 500px) and (max-width: 765px)": {
					width: "30% !important",
				},
				"@media screen and (max-width: 500px)": {
					width: "44% !important",
				},
				"@media screen and (max-width: 300px)": {
					width: "96% !important",
				},
			},
		},
		"& .upload-instruction-container": {
			paddingTop: "0px !important",
			"& .upload-instruction": {
				fontWeight: 600,
				letterSpacing: "normal",
				fontStyle: "normal",
				fontStretch: "normal",
				color: "#32393d",
			},
		},
		"& .upload-instruction": {
			fontWeight: 600,
			letterSpacing: "normal",
			fontStyle: "normal",
			fontStretch: "normal",
			color: "#32393d",
		},
		"& .video-close-button": {
			height: "36px !important",
			width: "120px !important",
			padding: "0px 25px !important",
			fontSize: "14px !important",
			fontWeight: 600,
			"@media screen and (max-width: 765px)": {
				width: "5vh !important",
			},
		},
		"& .aspect-ratio-section": {
			"& .aspect-box-default-style": {
				backgroundColor: theme.palette.common.white,
				border: "2px solid",
				borderColor: theme.palette.grey[500],
			},
			"& .aspect-box-selected-style": {
				backgroundColor: theme.palette.common.white,
				border: "2px solid",
				borderColor: theme.palette.primary.main,
			},
			"& .aspect-ratio-text": {
				textDecoration: "underline !important",
			},
		},
		"& .caption-tags-section": {
			"& .caption-description-style": {
				fontSize: "16px !important",
			},
		},
		"& .image-crop-section": {
			marginTop: "13px !important",
			backgroundColor: theme.palette.common.black,
			"& .photos-crop-section": {
				"& .cropper-face": {
					backgroundColor: "transparent",
				},
				"& .cropper-crop-box, .cropper-view-box": {
					boxShadow: "none !important",
					border: "1px dashed #fff",
				},
				"& .cropper-view-box": {
					boxShadow: "0 0 0 1px #39f",
					outline: 0,
				},
			},
			"& .vertical-zoom-slider-position": {
				height: "350px !important",
				position: "absolute !important",
				right: "15px !important",
			},
			"& .vertical-button-position": {
				position: "absolute !important",
				bottom: "15px !important",
			},
			"& .profile-photo-crop-section": {
				"& .cropper-face": {
					backgroundColor: "transparent",
				},
				"& .cropper-crop-box, .cropper-view-box": {
					zIndex: 1,
					borderRadius: "50%",
					boxShadow: "0 0 0 5px #fff !important",
				},
				"& .cropper-view-box": {
					zIndex: 1,
					boxShadow: "0 0 0 1px #39f",
					outline: 0,
				},
				"& .class-dashed": {
					zIndex: 0,
					border: "0 solid #eee",
					display: "block",
					opacity: "0.5",
					position: "absolute",
				},
				"& .my-h": {
					borderBottomWidth: "1px",
					borderTopWidth: "1px",
					height: "calc(100% / 6)",
					left: "0",
					top: "calc(100% / 4)",
					width: "100%",
				},
				"& .my-v": {
					borderLeftWidth: "1px",
					borderRightWidth: "1px",
					height: "100%",
					left: "calc(100% / 3)",
					top: "0",
					width: "calc(100% / 3)",
				}
			},
			"& .cover-photo-crop-section": {
				"& .cropper-face": {
					backgroundColor: "transparent",
				},
				"& .cropper-crop-box, .cropper-view-box": {
					boxShadow: "none !important",
					border: "1px dashed #fff",
				},
				"& .cropper-view-box": {
					boxShadow: "0 0 0 1px #39f",
					outline: 0,
				},
			},
			"& .zoom-icon-color": {
				color: theme.palette.grey.A100,
			},
			"& .action-instruction-section": {
				marginTop: "10px",
				"& .drag-instruction-text": {
					zIndex: 2,
					color: theme.palette.common.white,
					marginTop: "10px !important",
					fontSize: "12px !important",
					alignItems: "center",
					"@media screen and (max-width: 765px)": {
						marginLeft: "0px !important",
						marginTop: "22px !important",
					},
				},
				"& .action-button-position": {
					position: "absolute !important",
					right: "25px !important",
				},
				"& .change-button": {
					padding: "0px 10px !important",
					marginRight: "10px !important",
					height: "30px !important",
					backgroundColor: "#f3f4f5 !important",
				},
				"& .change-button-font": {
					fontSize: "14px !important",
					fontWeight: "600 !important",
					color: "#929699 !important",
				},
			},
		},
		"& .avatar-transformation-edit-style": {
			height: "255px !important",
			width: "255px !important",
			backgroundColor: theme.palette.common.white,
			color: theme.palette.primary.main,
			borderRadius: "50%",
			"@media screen and (max-width: 599px)": {
				height: "160px !important",
				width: "160px !important",
			},
		},
		"& .avatar-edit-style": {
			height: "255px !important",
			width: "255px !important",
			backgroundColor: theme.palette.common.white,
			borderColor: "#e1e4e6 !important",
			border: "1px solid !important",
			color: theme.palette.primary.main,
			"@media screen and (max-width: 599px)": {
				height: "160px !important",
				width: "160px !important",
			},
		},
		"& .singel-photo-viewer-modal": {
			"& .carousel-root": {
				maxWidth: "100% !important",
			},
			"& .photos-avatar-style": {
				width: "62px !important",
				height: "62px !important",
				border: "1px solid #ffffff",
				backgroundColor: "#e1e4e6",
			},
			"& .photos-avatar-transformation-style": {
				borderRadius: "50% !important",
				width: "62px !important",
				height: "62px !important",
				backgroundColor: "#e1e4e6",
			},
			"& .photos-modal-navigation": {
				width: "39px !important",
				height: "36px !important",
			},
			"& .photos-name-style": {
				fontSize: "18px !important",
				fontWeight: "bold !important",
				color: "#32393d !important",
				textAlign: "left",
				wordBreak: "break-all",
			},
			"& .photos-date-style": {
				fontSize: "16px !important",
				color: "#6d7278 !important",
			},
			"& .photos-caption-body": {
				fontSize: "18px !important",
				fontWeight: "normal !important",
				color: "#32393d !important",
				marginBottom: "5px",
				wordBreak: "break-word !important",
				"& .chip-input": {
					marginTop: "10px",
				},
				"& .chip-input-multiple": {
					marginTop: "16px",
				},
				"& ul,ol": {
					paddingLeft: "20px !important",
					marginTop: "0px !important",
					marginBottom: "0px !important",
				},
				"& p,h1,h2,h3,h4,h5,h6": {
					marginTop: "0px !important",
					marginBottom: "0px !important",
				},
			},
			"& .chip-margin": {
				margin: "0.4rem !important",
				marginLeft: "0px !important",
				maxWidth: "100%",
				height: "auto !important",
				minHeight: "32px !important",
				wordBreak: "break-all !important",
				"& .MuiChip-label": {
					whiteSpace: "initial !important",
				},
			},
		},
		"& .trash-bottom": {
			marginBottom: "8px !important",
		},
		"& .section-grid": {
			marginBottom: "0px !important",
			marginTop: "0px !important",
			"& .edit-icon-padding": {
				paddingRight: "10px !important",
			},
			"& .section-content-header": {
				marginBottom: "12px !important",
				fontSize: "14px !important",
				fontWeight: "bold !important",
				color: "#32393d !important",
				"& .section-content-tag-line": {
					fontWeight: "normal !important",
				},
			},
			"& .section-content-header-margin-none": {
				marginBottom: "0px !important",
			},
			"& .section-content-sub-header": {
				fontSize: "14px !important",
				color: "#32393d !important",
				wordBreak: "break-word !important",
			},
			"& .experience-view-section": {
				display: "inline !important",
				width: "100% !important",
				marginTop: theme.spacing(1.5),
				marginBottom: theme.spacing(0.5),
				"& .experience-content-header": {
					fontSize: "14px !important",
					fontWeight: "bold !important",
					color: "#32393d !important",
				},
			},
			"& .company-logo-img": {
				width: "100% !important",
				height: "100% !important",
			},
			"& .company-default-color": {
				backgroundColor: "#ffffff !important",
			},
			"& .section-company-title": {
				"& .company-name": {
					fontWeight: "700 !important",
					textAlign: "left !important",
					wordBreak: "break-word !important",
				},
				"& p": {
					fontSize: "14px !important",
				},
			},
			"& .section-sub-title": {
				fontSize: "14px !important",
				color: "#6d7578 !important",
			},
			"& .section-default-content-body": {
				color: "#6d7278 !important",
			},
			"& .create-groups-text-field-label": {
				marginTop: "22px !important",
			},
			"& .groups-about-this-group-input": {
				height: "120px !important",
				padding: "0px !important",
			},
			"& .section-content-body, & .section-content-container": {
				fontSize: "14px !important",
				fontWeight: "normal !important",
				color: "#32393d !important",
				wordBreak: "break-word !important",
				"& .text-align-left": {
					textAlign: "left !important",
				},
				"& .chip-input": {
					marginTop: "4px",
				},
				"& .chip-input-multiple": {
					marginTop: "16px",
				},
				"& ul,ol": {
					paddingLeft: "20px !important",
					marginTop: "0px !important",
					marginBottom: "0px !important",
				},
				"& li": {
					whiteSpace: "unset !important",
				},
				"& p,h1,h2,h3,h4,h5,h6": {
					marginTop: "0px !important",
					marginBottom: "0px !important",
				},
				"& .auto-complete-text-field": {
					width: "100% !important",
				},
				"& .auto-complete-input-container": {
					width: "100% !important",
				},
				"& .error": {
					borderColor: `${theme.palette.error.main} !important`,
				},
				"& .inspiration-link": {
					paddingTop: theme.spacing(1),
					paddingBottom: theme.spacing(1),
				},
				"& .inspiration-grid": {
					paddingBottom: theme.spacing(1),
					paddingTop: theme.spacing(0.5),
					"& .height-70": {
						minHeight: "70px !important",
					},
					"& .height-55": {
						minHeight: "55px !important",
					},
					"& .error-input": {
						border: "1px solid #f44336 !important",
					},
				},
				"& .content-padding": {
					paddingRight: "75px !important",
				},
				"& .default-content-padding": {
					paddingRight: "35px !important",
				},
			},
			"& .search-results-section": {
				marginTop: "18px !important",
				paddingLeft: "21px !important",
				"@media screen and (min-width: 600px) and (max-width: 830px)": {
					paddingLeft: "0px !important",
				},
				"@media screen and (min-width: 360px) and (max-width: 375px)": {
					paddingLeft: "0px !important",
				},
			},
			"& .search-profile-section": {
				paddingRight: "10px !important",
			},
			"& .add-new-admin-section-input-box": {
				paddingLeft: "21px !important",
				"@media screen and (min-width: 600px) and (max-width: 830px)": {
					paddingLeft: "0px !important",
				},
				"@media screen and (min-width: 360px) and (max-width: 375px)": {
					paddingLeft: "0px !important",
				},
				"& .input-text": {
					fontSize: "18px !important",
					color: "#32393d !important",
					"@media screen and (max-width: 375px)": {
						fontSize: "16px !important",
					},
				},
				"& .input-search-icon": {
					width: "29px !important",
					height: "30px !important",
					margin: "10px 12.5px !important",
				},
			},

			"& .add-new-admin-section": {
				paddingLeft: "21px !important",
				fontSize: "14px !important",
				fontWeight: "bold !important",
				textAlign: "left !important",
				color: "#929699 !important",
				cursor: "pointer !important",
				"@media screen and (min-width: 600px) and (max-width: 830px)": {
					paddingLeft: "0px !important",
				},
				"@media screen and (min-width: 360px) and (max-width: 375px)": {
					paddingLeft: "0px !important",
				},
			},
			"& .add-new-admin-avatar": {
				width: "75px !important",
				height: "75px !important",
				padding: "22px 23px 23px 22px !important",
				color: "#929699 !important",
				backgroundColor: "#f3f4f5 !important",
			},
			"& .groups-help-text": {
				marginTop: "10px !important",
			},
			"& .no-padding-right": {
				padding: "10px 0px 7px 12px !important",
			},
			"& .section-water-mark": {
				fontSize: "14px !important",
				fontWeight: "normal !important",
				color: "#6d7278 !important",
				marginTop: "5px !important",
				marginBottom: "5px !important",
			},
			"& .add-more": {
				color: "#269cd2 !important",
				fontWeight: "700 !important",
				cursor: "pointer !important",
				"&:focus": {
					outline: "none !important",
					border: "0px !important",
				},
			},
			"& .word-break": {
				wordBreak: "break-word !important",
				paddingRight: "15px !important",
			},
			"& .experience-form": {
				"& .field-header": {
					marginBottom: "10px !important",
				},
				"& .field-container": {
					marginTop: "12px !important",
				},
				"& .field-container-less": {
					marginTop: "4px !important",
					"& .date-max-width": {
						maxWidth: "167px !important",
						"@media screen and (max-width: 960px)": {
							maxWidth: "100% !important",
						},
					},
				},
				"& .error-label": {
					color: `${theme.palette.error.main}  !important`,
				},
				"& .error": {
					borderColor: `${theme.palette.error.main} !important`,
				},
				"& .auto-complete-text-field": {
					marginTop: "20px !important",
				},
				"& .auto-complete-input-container": {
					width: "100% !important",
				},
				"& .auto-complete-text-paper": {
					margin: "5px 0 !important",
					boxShadow: "0 2px 12px 0 rgba(0,0,0,.1) !important",
					borderRadius: "4px !important",
					border: "1px solid #e4e7ed !important",
					boxSizing: "border-box !important",
					backgroundColor: "#eaecee !important",
					color: "#606266 !important",
				},
			},
			"& .checkbox-style": {
				marginTop: "20px !important",
				marginRight: theme.spacing(0),
				marginLeft: "-60px !important",
				"@media screen and (max-width: 1010px)": {
					marginLeft: "-40px !important",
				},
				"@media screen and (max-width: 960px)": {
					marginLeft: "0px !important",
				},
				"@media screen and (max-width: 768px)": {
					margin: theme.spacing(0),
				},
			},
		},
		"& .groups-section-min-width": {
			minWidth: "calc(100% + 12px) !important",
			marginTop: "-12px !important",
		},
		"& .photos-sortable-grid": {
			width: "100% !important",
			padding: "2px",
			display: "contents",
			listStyle: "none",
		},
	},
	groupModalStyle: {
		marginTop: "-20px !important",
		"@media screen and (max-width: 765px)": {
			marginTop: "0px !important",
		},
	},
	dividerStyleDigitalMe: {
		width: "100% !important",
		marginBottom: "9px !important",
		marginTop: "12px !important",
		height: "3px !important",
		opacity: "0.5 !important",
	},
	digitalMeSectionHeader: {
		fontSize: "16px !important",
		fontWeight: "bold !important",
		color: "#32393d !important",
	},
	digitalMeIcons: {
		width: "35px !important",
		height: "35px !important",
		borderRadius: "2px !important",
	},
	digitalMeIconContainer: {
		margin: "5px 10px !important",
		marginBottom: "0px !important",
		marginLeft: "0px !important",
	},
	smallDeviceIcon: {
		width: "24px !important",
		height: "26px !important",
	},
	iconLink: {
		fontWeight: "700 !important",
		display: "flex !important",
		alignItems: "flex-start !important",
		cursor: "pointer !important",
		color: "#269cd2 !important",
	},
	noUnderLine: {
		textDecoration: "none !important",
	},
	digitalMeDeleteButton: {
		width: "30px !important",
		height: "30px !important",
	},
	dragIconColor: {
		color: "#929699 !important",
	},
	rePositionDragIcon: {
		marginLeft: "-14px !important",
		"@media screen and (max-width: 765px)": {
			marginLeft: "0px !important",
		},
	},
	customLinkContainer: {
		marginLeft: "10px !important",
	},
	wordBreak: {
		wordBreak: "break-word !important",
	},
	fixedInputText: {
		width: "20px !important",
	},
	paddingLeftNone: {
		padding: "10px 2px !important",
	},
	paddingLeftOther: {
		paddingLeft: "9px !important",
	},
	dragIconContainer: {
		display: "flex !important",
		alignItems: "center !important",
	},
	height40: {
		height: "40px !important",
		"& .icon-container": {
			display: "flex !important",
			justifyContent: "space-between !important",
			width: "70px !important",
			"& .icon-grid": {
				display: "flex !important",
			},
		},
	},
	errorLabel: {
		color: "#f44336 !important",
	},
	errorInput: {
		borderColor: "#f44336 !important",
	},
	scrollSectionStyleFull: {
		width: "100% !important",
		margin: "15px 0px",
		minHeight: "142px",
	},
	addMoreSelect: {
		marginTop: "16px !important",
	},
	scrollSectionStyle: {
		width: "100% !important",
		margin: "5px 0px",
	},
	digitalMeSectionContainer: {
		marginTop: "7px !important",
	},
	digitalMeSectionGrid: {
		marginTop: "4px !important",
		"& .empty-input-grid": {
			marginTop: "6.5px !important",
			marginBottom: "14px !important",
		},
		"& .error-input": {
			border: "1px solid #f44336 !important",
		},
	},
	listGrid: {
		marginTop: "7px !important",
		"@media screen and (max-width: 765px)": {
			paddingRight: "1rem",
		},
	},
	marginTop7: {
		marginTop: "7px !important",
	},
	buttonPanel: {
		marginTop: "3vh !important",
		marginBottom: "1vh !important",
	},
	buttonPanelBottom: {
		marginTop: "1vh !important",
		marginBottom: "1vh !important",
	},
	digitalMeSection: {
		marginBottom: "10px !important",
		marginTop: "5px !important",
	},
	height80: {
		height: "85px !important",
	},
	width95: {
		width: "95% !important",
	},
	digitalMeIconsSmall: {
		width: "16px !important",
		height: "16px !important",
		borderRadius: "2px !important",
	},
	addMoreIcon: {
		width: "30px !important",
		borderLeft: "solid 1px #d9dbdd !important",
		color: "#d8dbdc !important",
		marginTop: "-4px !important",
		height: "32px !important",
	},
	selectInput: {
		borderRadius: "4px !important",
		border: "solid 1px #e1e4e6 !important",
		backgroundColor: "#ffffff !important",
		height: "30px !important",
		fontSize: "14px !important",
		fontWeight: "normal !important",
		paddingRight: "30px !important",
		paddingLeft: "10px !important",
		lineHeight: "2.2 !important",
		paddingBottom: "0px !important",
		paddingTop: "0px !important",
	},
	width100: {
		width: "100% !important",
	},
}));

export { useStyles };