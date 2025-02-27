describe("Pizza Sipariş Sayfası", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173/"); 
        cy.get('[data-cy="startCy"]').click();
    });
  
    it("Sayfa yüklenmeli ve başlık görünmeli", () => {
      cy.get(".pageMap").should("contain", "Anasayfa - Sipariş Oluştur");
    });
  
    it("Pizza boyutu seçilmeli", () => {
      cy.get('[data-cy="radioMedium"]').click().should("be.checked");
    });
  
    it("Hamur tipi seçilmeli", () => {
      cy.get('[data-cy="elementCy"]').select("Orta Kalınlıkta Hamur");
      cy.get('[data-cy="elementCy"]').should("have.value", "Orta Kalınlıkta Hamur");
    });
  
    it("En az 4 malzeme seçilmeli", () => {
      cy.get('[data-cy="checkboxCy0"]').check();
      cy.get('[data-cy="checkboxCy1"]').check();
      cy.get('[data-cy="checkboxCy2"]').check();
      cy.get('[data-cy="checkboxCy3"]').check();
    });
  
    it("Ad eklenmeli ve sipariş notu girilmeli", () => {
      cy.get('[data-cy="nameCy"]').type("Tolunay").should("have.value", "Tolunay");
      cy.get('[data-cy="commentCy"]').type("Bol peynir ekleyin.").should("have.value", "Bol peynir ekleyin.");
    });
  
    it("Adet artırma ve azaltma çalışmalı", () => {
      cy.get('[data-cy="butonBigCy"]').click();
      cy.get('[data-cy="butonBigCy"]').click();
      cy.get('[data-cy="butonSmallCy"]').click();
      cy.get(".resultButton button:nth-child(2)").should("contain", "2");
    });
  
    it("Sipariş butonu etkin olmalı ve sipariş gönderilmeli", () => {
      cy.get('[data-cy="butonClick"]').should("be.disabled"); // Başlangıçta buton pasif olmalı
  
      cy.get('[data-cy="radioMedium"]').click();
      cy.get('[data-cy="elementCy"]').select("Orta Kalınlıkta Hamur");
      cy.get('[data-cy="checkboxCy0"]').check();
      cy.get('[data-cy="checkboxCy1"]').check();
      cy.get('[data-cy="checkboxCy2"]').check();
      cy.get('[data-cy="checkboxCy3"]').check();
      cy.get('[data-cy="nameCy"]').type("Tolunay");
  
      cy.get('[data-cy="butonClick"]').should("not.be.disabled"); // Buton aktif olmalı
      cy.get('[data-cy="butonClick"]').click();
  
      cy.url().should("include", "/endpage"); // Sayfa yönlendirmesi kontrol edilir
    });
  
    it("API'ye başarılı sipariş gönderilmeli", () => {
      cy.intercept("POST", "https://reqres.in/api/pizza", {
        statusCode: 201,
        body: { success: true },
      }).as("submitOrder");
  
      cy.get('[data-cy="radioMedium"]').click();
      cy.get('[data-cy="elementCy"]').select("Orta Kalınlıkta Hamur");
      cy.get('[data-cy="checkboxCy0"]').check();
      cy.get('[data-cy="checkboxCy1"]').check();
      cy.get('[data-cy="checkboxCy2"]').check();
      cy.get('[data-cy="checkboxCy3"]').check();
      cy.get('[data-cy="nameCy"]').type("Tolunay");
      cy.get('[data-cy="butonClick"]').click();
  
      cy.wait("@submitOrder").its("response.statusCode").should("eq", 201);
    });
  });
  