describe('drag n drop', () => {
  it('create a video', () => {
    cy.visit('https://staging.playplay.com')
    cy.get('.WelcomeStep__DiscardButton-sc-18c5grd-0 > span').click()
    cy.get('#log_in_link').click()
    cy.get('#email').type('nightwatch.playplay@gmail.com')
    cy.get('#password').type('hctawthgin')
    cy.get('[data-cy="authForm_submit_button"]').click()
    cy.wait(7000)
    cy.get('.pp__start-from-scratch-card').click()
    cy.wait(5000)
    cy.get('[data-cy="settingsPanel_library_button"]').click()
    cy.get('[data-cy="library_favorites_tab"]').click()
    cy.get('.pp__screens-timeline__add-screen-cta > .ds__button-wrapper').click()
    cy.get(':nth-child(1) > .pp__add-a-new-screen-screens-list__category-screens > :nth-child(9) > .pp__add-a-new-screen-catalog-item > .pp__add-a-new-screen-catalog-item__cover').click()
    const dataTransfer = new DataTransfer();
    cy.get('[class="favorites-list-item"]').eq(0).trigger("dragstart", {
      dataTransfer,
    });
    cy.wait(5000);
    cy.get('[class="media-uploader-container media-uploader"]').trigger(
      "drop",
      {
        dataTransfer,
      }
    );
    cy.get('[data-cy="mediaEditionModal_save_button"]').click()
    })
  })
