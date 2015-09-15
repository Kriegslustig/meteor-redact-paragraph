Redact.addModule(
  'paragraph',
  (
    typeof Template != 'undefined'
      ? Template.redactParagraph
      : ''
  ),
  {
    label: 'Paragraph',
    icon: '/redactParagraph.svg',
    defaults: {
      _html: 'Lorem Ipsum'
    }
  }
)
