/* bender-tags: editor */
/* bender-ckeditor-plugins: colorbutton,toolbar,wysiwygarea */

( function() {
	'use strict';

	bender.editor = true;

	bender.test( {
		// 1008
		'test highlighted color with background color button': function() {
			var editor = this.editor,
				bgColorBtn = editor.ui.get( 'BGColor' );

			resume( function() {
				assert.areSame( 'true', bgColorBtn._.panel.getBlock( bgColorBtn._.id ).element.find( 'a.cke_colorbox' ).getItem( 22 ).getAttribute( 'aria-selected' ) );
				assert.areSame( 'Dark Gray', bgColorBtn._.panel.getBlock( bgColorBtn._.id ).element.find( 'a.cke_colorbox' ).getItem( 22 ).$.title );
				assert.areSame( '999', bgColorBtn._.panel.getBlock( bgColorBtn._.id ).element.find( 'a.cke_colorbox' ).getItem( 22 ).getAttribute( 'data-value' ) );
			} );

			bender.tools.selection.setWithHtml( editor, '<h1 style="background: #999999">{Moo}</h1>' );
			bgColorBtn.click( editor );

			wait();
		},

		'test highlighted color with text color button': function() {
			var editor = this.editor,
				txtColorBtn = editor.ui.get( 'TextColor' );

			resume( function() {
				assert.areSame( 'true', txtColorBtn._.panel.getBlock( txtColorBtn._.id ).element.find( 'a.cke_colorbox' ).getItem( 23 ).getAttribute( 'aria-selected' ) );
				assert.areSame( 'Black', txtColorBtn._.panel.getBlock( txtColorBtn._.id ).element.find( 'a.cke_colorbox' ).getItem( 23 ).$.title );
				assert.areSame( '000', txtColorBtn._.panel.getBlock( txtColorBtn._.id ).element.find( 'a.cke_colorbox' ).getItem( 23 ).getAttribute( 'data-value' ) );
			} );

			bender.tools.selection.setWithHtml( editor, '<h1 style="color: #000000;">{Moo}</h1>' );
			txtColorBtn.click( editor );

			wait();
		},

		'test highlighted color with background and text color button': function() {
			var editor = this.editor,
				txtColorBtn = editor.ui.get( 'TextColor' ),
				bgColorBtn = editor.ui.get( 'BGColor' );

			resume( function() {
				assert.areSame( 'true', bgColorBtn._.panel.getBlock( bgColorBtn._.id ).element.find( 'a.cke_colorbox' ).getItem( 16 ).getAttribute( 'aria-selected' ) );
				assert.areSame( 'Light Gray', bgColorBtn._.panel.getBlock( bgColorBtn._.id ).element.find( 'a.cke_colorbox' ).getItem( 16 ).$.title );
				assert.areSame( 'DDD', bgColorBtn._.panel.getBlock( bgColorBtn._.id ).element.find( 'a.cke_colorbox' ).getItem( 16 ).getAttribute( 'data-value' ) );

				txtColorBtn.click( editor );

				assert.areSame( 'true', txtColorBtn._.panel.getBlock( txtColorBtn._.id ).element.find( 'a.cke_colorbox' ).getItem( 17 ).getAttribute( 'aria-selected' ) );
				assert.areSame( 'White', txtColorBtn._.panel.getBlock( txtColorBtn._.id ).element.find( 'a.cke_colorbox' ).getItem( 17 ).$.title );
				assert.areSame( 'FFF', txtColorBtn._.panel.getBlock( txtColorBtn._.id ).element.find( 'a.cke_colorbox' ).getItem( 17 ).getAttribute( 'data-value' ) );
			} );

			bender.tools.selection.setWithHtml( editor, '<h1 style="color: #ffffff; background: #dddddd">{Moo}</h1>' );
			bgColorBtn.click( editor );

			wait();
		}
	} );
} )();
