$ = require 'jquery'
require '../../common/scripts/ui.js'

$ ->
	$ \#form .submit (event) ->
		event.prevent-default!
		$form = $ @
		$submit-button = $form.find '[type=submit]'

		$submit-button.attr \disabled yes

		$.ajax "#{CONFIG.web-api-url}/posts/create" {
			data:
				'text': ($form.find \textarea .val!)
		}
		.done (group) ->
			alert '投稿しました。'
			if window.opener?
				window.close!
			else
				location.href = CONFIG.url
		.fail (data) ->
			$submit-button.attr \disabled no
