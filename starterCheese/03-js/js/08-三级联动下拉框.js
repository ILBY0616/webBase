class DistrictCascading {
    constructor(group) {
        const selectArray = group.getElementsByTagName('select');
        this.first = selectArray[0];
        this.second = selectArray[1];
        this.third = selectArray[2];

        this.first.appendChild(new Option('--请选择--'));
        this.second.appendChild(new Option('--请选择--'));
        this.third.appendChild(new Option('--请选择--'));

        this.provinces;
        this.cities;
        this.districts;

        this._initiateProvince = this._initiateProvince.bind(this);
        this.first.addEventListener('focus', this._initiateProvince);

        this._initiateCity = this._initiateCity.bind(this);
        this.first.addEventListener('change', this._initiateCity);

        this._initiateDistrict = this._initiateDistrict.bind(this);
        this.second.addEventListener('change', this._initiateDistrict);
    }

    _initiateProvince() {
        this.first.length = 1;
        this.provinces = data;
        for (let key in this.provinces) {
            this.first.appendChild(new Option(this.provinces[key].name, key));
        }
    }

    _initiateCity() {
        this.second.length = 1;
        this.cities = this.provinces[this.first.options[this.first.selectedIndex].value].child;
        for (let key in this.cities) {
            this.second.appendChild(new Option(this.cities[key].name, key));
        }
    }

    _initiateDistrict() {
        this.third.length = 1;
        this.districts = this.cities[this.second.options[this.second.selectedIndex].value].child;
        for (let key in this.districts) {
            this.third.appendChild(new Option(this.districts[key], key));
        }
    }

}