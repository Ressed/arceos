searchState.loadedDescShard("axfs", 0, "ArceOS filesystem module.\nWrapper struct for the namespace resource [<code>CURRENT_DIR</code>]\nWrapper struct for the namespace resource [<code>CURRENT_DIR_PATH</code>…\n<code>std::fs</code>-like high-level filesystem manipulation operations.\nReturn a copy of the inner path.\nReturn a copy of the CURRENT_DIR_NODE.\nDereference the resource automatically, according whether …\nDereference the resource automatically, according whether …\nDereference the resource from the given namespace.\nDereference the resource from the given namespace.\nDereference the resource from the global namespace.\nDereference the resource from the global namespace.\nLow-level filesystem operations.\nReturns the argument unchanged.\nReturns the argument unchanged.\nInitializes filesystems by block devices.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nBlock device\nCharacter device\nDirectory\nA builder used to create directories in various manners.\nEntries returned by the <code>ReadDir</code> iterator.\nFIFO (named pipe)\nAn object providing access to an open file on the …\nRegular file\nA structure representing a type of file with accessors for …\nMetadata information about a file.\nOptions and flags which can be used to configure how a …\nRepresentation of the various permissions on a file.\nIterator over the entries in a directory.\nSocket\nSymbolic link\ncheck whether absolute path exists.\nSets the option for the append mode.\nReturns the number of blocks allocated to the file, in …\nReturns the canonical, absolute form of a path with all …\nOpens a file in write-only mode.\nCreates the specified directory with the options …\nSets the option to create a new file, or open it if it …\nCreates a new, empty directory at the provided path.\nRecursively create a directory and all of its parent …\nCreates a new file in read-write mode; error if the file …\nSets the option to create a new file, failing if it …\nReturns the current working directory as a <code>String</code>.\nReturns the bare file name of this directory entry without …\nReturns the file type for the file that this entry points …\nReturns the file type for this metadata.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if this metadata is for a directory. The …\nReturns <code>true</code> if this metadata is for a regular file. The …\nReturns the size of the file, in bytes, this metadata is …\nGiven a path, query the file system to get information …\nQueries metadata about the underlying file.\nCreates a new set of options with default mode/security …\nCreates a blank new set of options ready for configuration.\nAttempts to open a file in read-only mode.\nOpens a file at <code>path</code> with the options specified by <code>self</code>.\nReturns a new OpenOptions object.\nReturns the full path to the file that this entry …\nReturns the permissions of the file this metadata is for.\nRead the entire contents of a file into a bytes vector.\nSets the option for read access.\nReturns an iterator over the entries within a directory.\nRead the entire contents of a file into a string.\nIndicates that directories should be created recursively, …\nRemoves an empty directory.\nRemoves a file from the filesystem.\nRename a file or directory to a new name. Delete the …\nChanges the current working directory to the specified …\nTruncates or extends the underlying file, updating the …\nReturns the total size of this file in bytes.\nSets the option for truncating a previous file.\nWrite a slice as the entire contents of a file.\nSets the option for write access.\nBlock device\nCharacter device\nDirectory\nAlias of <code>axfs_vfs::VfsDirEntry</code>.\nAn opened directory object, with open permissions and a …\nA disk device with a cursor.\nFIFO (named pipe)\nAn opened file object, with open permissions and a cursor.\nRegular file\nAlias of <code>axfs_vfs::VfsNodeAttr</code>.\nAlias of <code>axfs_vfs::VfsNodePerm</code>.\nAlias of <code>axfs_vfs::VfsNodeType</code>.\nThe interface to define custom filesystems in user apps.\nOptions and flags which can be used to configure how a …\nSocket\nSymbolic link\nSets the option for the append mode.\nSets the option to create a new file, or open it if it …\nCreates an empty directory at the path relative to this …\nCreates an empty file at the path relative to this …\nSets the option to create a new file, failing if it …\nSets the option to open a directory.\nSets the option for execute access.\nFlushes the file, writes all buffered data to the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGets the file attributes.\ncheck whether contains directory.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a new disk.\nCreates a blank new set of options ready for configuration.\nCreates a new instance of the filesystem with …\nOpens a file at the path relative to the current …\nOpens a directory at the path relative to the current …\nOpens a directory at the path relative to this directory. …\nOpens a file at the path relative to this directory. …\nGet the position of the cursor.\nReads the file at the current position. Returns the number …\nSets the option for read access.\nReads the file at the given position. Returns the number …\nReads directory entries starts from the current position …\nRead a single block starting from the specified offset.\nRead within one block, returns the number of bytes read.\nRemoves a directory at the path relative to this directory.\nRemoves a file at the path relative to this directory.\nRename a file or directory to a new name. Delete the …\nSets the cursor of the file to the specified offset. …\nSets the create flags.\nSet the position of the cursor.\nSets the read flag.\nSets the write flag.\nGet the size of the disk.\nTruncates the file to the specified size.\nSets the option for truncating a previous file.\nWrites the file at the current position. Returns the …\nSets the option for write access.\nWrites the file at the given position. Returns the number …\nWrite single block starting from the specified offset.\nWrite within one block, returns the number of bytes …")