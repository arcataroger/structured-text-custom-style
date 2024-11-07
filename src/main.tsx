import {connect} from "datocms-plugin-sdk";
import "datocms-react-ui/styles.css";

connect({
	customBlockStylesForStructuredTextField(field, fieldCtx) {

		console.log('field', field)
		console.log('fieldCtx', fieldCtx)
		return [
			{
				id: 'emphasized',
				node: 'paragraph',
				label: 'Emphasized',
				appliedStyle: {
					fontFamily: 'Georgia',
					fontStyle: 'italic',
					fontSize: '1.4em',
					lineHeight: '1.2',
				}
			}
		];
	},
	customMarksForStructuredTextField() {
		return [
			{
				id: 'spoiler',
				label: 'Spoiler',
				icon: 'bomb',
				keyboardShortcut: 'mod+shift+l',
				appliedStyle: {
					backgroundColor: 'rgba(255, 0, 0, 0.3)',
				},
			},
		];
	},
});
