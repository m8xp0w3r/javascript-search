/**
 * Created by PHausmann on 30.07.14.
 */

/**
 * A store of Entry-objects.
 */
class EntryStore
{
	constructor()
	{
		this.entries = [];
	}

	/**
	 * Adds the given Entry.
	 *
	 * @param _entry {Entry} The Entry we have to add.
	 */
	addEntry(_entry)
	{
		this.entries.push(_entry);
	};
}
