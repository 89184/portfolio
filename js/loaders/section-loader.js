// Section Loader - Dynamically loads HTML sections
export default class SectionLoader {
  constructor(container) {
    this.container = container;
    // Sections that should NOT have 3D tilt
    this.noTiltSections = ['hero', 'summary'];
  }

  async loadAll(sectionNames) {
  // This should load in order
  for (const name of sectionNames) 
  {
    const wrapper = await this.loadSection(name);
      if (wrapper) {
        this.container.appendChild(wrapper);
      }
    }
    return this.container;
  }

  async loadSection(name, serial) {
    try {
      const response = await fetch(`sections/${name}.html`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const html = await response.text();

      const wrapper = document.createElement('div');
      wrapper.className = `section ${name}-section`;

      // Only add tilt attribute if section should have 3D effect
      if (!this.noTiltSections.includes(name)) {
        wrapper.setAttribute('data-tilt', '');
      }

      // Attach serial number (two digits) for display by the UI
      wrapper.setAttribute('data-serial', String(serial).padStart(2, '0'));

      wrapper.innerHTML = `<div class="card-3d">${html}</div>`;

      this.container.appendChild(wrapper);
      return wrapper;
    } catch (error) {
      console.warn(`Failed to load section "${name}":`, error);
      return null;
    }
  }
}
