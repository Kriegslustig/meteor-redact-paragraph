redactParagraph = Redact.addModule(
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

if(Meteor.isClient) {
  Template.redactParagraph.events({
    'keydown .redactParagraph': function (e) {
      if(
        e.keyCode == 8
        && (
          e.currentTarget.innerHTML.length < 1
          || e.currentTarget.innerHTML === '<br>'
        )
      ) {
        redactParagraph.removeElement(
          Template.currentData().collection,
          Template.parentData(1)._id,
          '_draft',
          Template.currentData()._id
        )
      }
    }
  })
}
